const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Send email endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { subject, message } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: message,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message ID:', info.messageId);
        console.log('Email sent:', info.response);

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Newsletter subscription endpoint
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        await pool.query(
            'INSERT INTO emails (email) VALUES ($1)',
            [email]
        );
        res.status(200).send({ message: 'Subscribed successfully' });
    } catch (err) {
        if (err.code === '23505') { // Unique violation
            res.status(409).send({ message: 'Email already subscribed' });
        } else {
            console.error('Subscribe error:', err);
            res.status(500).send({ message: 'Server error' });
        }
    }
});

// Send newsletter function
const sendNewsletter = async () => {
    try {
        const result = await pool.query('SELECT email FROM emails');
        const emails = result.rows;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            subject: 'Your Newsletter',
            text: 'This is your periodic newsletter.',
        };

        emails.forEach((emailDoc) => {
            transporter.sendMail({ ...mailOptions, to: emailDoc.email }, (err, info) => {
                if (err) {
                    console.error('Error sending email:', err);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        });
    } catch (err) {
        console.error('Error sending newsletters:', err);
    }
};

// Schedule newsletter - every day at 9 AM
cron.schedule('0 9 * * *', () => {
    console.log('Sending newsletters...');
    sendNewsletter();
});

// Health check
app.get('/health', (_req, res) => {
    res.status(200).send('Server is running');
});

// Get article by ID
app.get("/replyke-articles/:article_id", async (req, res) => {
    try {
        const { article_id } = req.params;

        const result = await pool.query(
            'SELECT * FROM articles WHERE article_id = $1',
            [article_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).send();
        }

        return res.status(200).send(result.rows[0]);
    } catch (err) {
        console.error('Get article error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Like an article
app.post("/replyke-articles/like", async (req, res) => {
    try {
        const { article_id, user_id } = req.body;

        if (!article_id || !user_id) {
            return res.status(400).send("Missing article_id or user_id in request body");
        }

        const articleResult = await pool.query(
            'SELECT * FROM articles WHERE article_id = $1',
            [article_id]
        );

        if (articleResult.rows.length > 0) {
            const article = articleResult.rows[0];
            
            // Check if user already liked
            if (article.likes.includes(user_id)) {
                return res.status(409).send("User already liked article");
            }

            // Update existing article
            const updated = await pool.query(
                `UPDATE articles 
                 SET likes = array_append(likes, $1), 
                     likes_count = likes_count + 1 
                 WHERE article_id = $2 
                 RETURNING *`,
                [user_id, article_id]
            );

            return res.status(200).send(updated.rows[0]);
        } else {
            // Create new article
            const newArticle = await pool.query(
                `INSERT INTO articles (article_id, likes, likes_count, comments_count, replies_count)
                 VALUES ($1, $2, 1, 0, 0)
                 RETURNING *`,
                [article_id, [user_id]]
            );

            return res.status(200).send(newArticle.rows[0]);
        }
    } catch (err) {
        console.error('Like article error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Unlike an article
app.post("/replyke-articles/unlike", async (req, res) => {
    try {
        const { article_id, user_id } = req.body;

        if (!article_id || !user_id) {
            return res.status(400).send("Missing article_id or user_id in request body");
        }

        const articleResult = await pool.query(
            'SELECT * FROM articles WHERE article_id = $1',
            [article_id]
        );

        if (articleResult.rows.length === 0 || !articleResult.rows[0].likes.includes(user_id)) {
            return res.status(409).send("Can't unlike, as user didn't like article or article not found");
        }

        const updated = await pool.query(
            `UPDATE articles 
             SET likes = array_remove(likes, $1), 
                 likes_count = likes_count - 1 
             WHERE article_id = $2 
             RETURNING *`,
            [user_id, article_id]
        );

        return res.status(200).send(updated.rows[0]);
    } catch (err) {
        console.error('Unlike article error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Get comments with pagination
app.get("/replyke-comments", async (req, res) => {
    try {
        const { article_id, sort_by, parent, page = 1, limit = 5 } = req.query;

        const limitAsNumber = Number(limit);
        const pageAsNumber = Number(page);

        if (isNaN(limitAsNumber) || isNaN(pageAsNumber) || pageAsNumber < 1) {
            return res.status(400).send("Invalid pagination parameters");
        }

        let orderBy = 'created_at DESC';
        if (sort_by === 'popular') {
            orderBy = 'likes_count DESC, created_at DESC';
        } else if (sort_by === 'newest') {
            orderBy = 'created_at ASC';
        } else if (sort_by === 'oldest') {
            orderBy = 'created_at DESC';
        }

        const offset = (pageAsNumber - 1) * limitAsNumber;
        
        const parentCondition = parent ? 'AND parent = $3' : 'AND parent IS NULL';
        const params = parent ? [article_id, limitAsNumber, parent, offset] : [article_id, limitAsNumber, offset];
        const offsetParam = parent ? '$4' : '$3';

        const result = await pool.query(
            `SELECT * FROM comments 
             WHERE article_id = $1 ${parentCondition}
             ORDER BY ${orderBy}
             LIMIT $2 OFFSET ${offsetParam}`,
            params
        );

        return res.status(200).send(result.rows);
    } catch (err) {
        console.error('Get comments error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Post a new comment
app.post("/replyke-comments", async (req, res) => {
    try {
        const { article_id, comment_body, parent, author } = req.body;

        if (!article_id || !comment_body || !author) {
            return res.status(400).send("Missing required comment details");
        }

        const comment = await pool.query(
            `INSERT INTO comments (article_id, body, parent, likes, likes_count, replies_count, author_id, author_name, author_img)
             VALUES ($1, $2, $3, $4, 0, 0, $5, $6, $7)
             RETURNING *`,
            [article_id, comment_body, parent || null, [], author._id, author.name, author.img]
        );

        // Update parent comment's reply count if this is a reply
        if (parent) {
            await pool.query(
                'UPDATE comments SET replies_count = replies_count + 1 WHERE id = $1',
                [parent]
            );
        }

        // Update or create article
        const articleResult = await pool.query(
            'SELECT * FROM articles WHERE article_id = $1',
            [article_id]
        );

        if (articleResult.rows.length > 0) {
            const updateField = parent ? 'replies_count' : 'comments_count';
            await pool.query(
                `UPDATE articles SET ${updateField} = ${updateField} + 1 WHERE article_id = $1`,
                [article_id]
            );
        } else {
            await pool.query(
                `INSERT INTO articles (article_id, likes, likes_count, comments_count, replies_count)
                 VALUES ($1, $2, 0, 1, 0)`,
                [article_id, []]
            );
        }

        return res.status(200).send(comment.rows[0]);
    } catch (err) {
        console.error('Post comment error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Delete a comment and its replies
app.delete("/replyke-comments", async (req, res) => {
    try {
        const { comment_id } = req.body;

        if (!comment_id) {
            return res.status(400).send("Comment ID is required");
        }

        const targetCommentResult = await pool.query(
            'SELECT * FROM comments WHERE id = $1',
            [comment_id]
        );

        if (targetCommentResult.rows.length === 0) {
            return res.status(404).send("Comment not found");
        }

        const targetComment = targetCommentResult.rows[0];

        // Count comments and replies to be deleted
        const countResult = await pool.query(
            `WITH RECURSIVE comment_tree AS (
                SELECT id, parent FROM comments WHERE id = $1
                UNION ALL
                SELECT c.id, c.parent FROM comments c
                INNER JOIN comment_tree ct ON c.parent = ct.id
            )
            SELECT 
                COUNT(*) FILTER (WHERE parent IS NULL) as first_level_count,
                COUNT(*) FILTER (WHERE parent IS NOT NULL) as replies_count
            FROM comment_tree ct
            JOIN comments c ON ct.id = c.id`,
            [comment_id]
        );

        const firstLevelCount = parseInt(countResult.rows[0].first_level_count) || 0;
        const repliesCount = parseInt(countResult.rows[0].replies_count) || 0;

        // Delete comment and all its children (CASCADE handles this)
        await pool.query('DELETE FROM comments WHERE id = $1', [comment_id]);

        // Update parent comment's reply count if this was a reply
        if (targetComment.parent) {
            await pool.query(
                'UPDATE comments SET replies_count = replies_count - 1 WHERE id = $1',
                [targetComment.parent]
            );
        }

        // Update article counts
        const article = await pool.query(
            `UPDATE articles 
             SET comments_count = comments_count - $1,
                 replies_count = replies_count - $2
             WHERE article_id = $3
             RETURNING *`,
            [firstLevelCount, repliesCount, targetComment.article_id]
        );

        return res.status(200).send(article.rows[0]);
    } catch (err) {
        console.error('Delete comment error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Update a comment
app.patch("/replyke-comments", async (req, res) => {
    try {
        const { update, comment_id } = req.body;

        if (!update || !comment_id) {
            return res.status(400).send("Update content and comment ID are required");
        }

        const result = await pool.query(
            'UPDATE comments SET body = $1 WHERE id = $2 RETURNING *',
            [update, comment_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).send("Comment not found or update failed");
        }

        return res.status(200).send(result.rows[0]);
    } catch (err) {
        console.error('Update comment error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Like a comment
app.post("/replyke-comments/like", async (req, res) => {
    try {
        const { comment_id, user_id } = req.body;

        if (!comment_id || !user_id) {
            return res.status(400).send("Comment ID and user ID are required");
        }

        const commentResult = await pool.query(
            'SELECT * FROM comments WHERE id = $1',
            [comment_id]
        );

        if (commentResult.rows.length === 0) {
            return res.status(404).send("Comment not found");
        }

        if (commentResult.rows[0].likes.includes(user_id)) {
            return res.status(409).send("User has already liked this comment");
        }

        const updated = await pool.query(
            `UPDATE comments 
             SET likes = array_append(likes, $1),
                 likes_count = likes_count + 1
             WHERE id = $2
             RETURNING *`,
            [user_id, comment_id]
        );

        return res.status(200).send(updated.rows[0]);
    } catch (err) {
        console.error('Like comment error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

// Unlike a comment
app.post("/replyke-comments/unlike", async (req, res) => {
    try {
        const { comment_id, user_id } = req.body;

        if (!comment_id || !user_id) {
            return res.status(400).send("Comment ID and user ID are required");
        }

        const commentResult = await pool.query(
            'SELECT * FROM comments WHERE id = $1',
            [comment_id]
        );

        if (commentResult.rows.length === 0) {
            return res.status(404).send("Comment not found");
        }

        if (!commentResult.rows[0].likes.includes(user_id)) {
            return res.status(409).send("User hasn't liked this comment");
        }

        const updated = await pool.query(
            `UPDATE comments 
             SET likes = array_remove(likes, $1),
                 likes_count = likes_count - 1
             WHERE id = $2
             RETURNING *`,
            [user_id, comment_id]
        );

        return res.status(200).send(updated.rows[0]);
    } catch (err) {
        console.error('Unlike comment error:', err);
        return res.status(500).send({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
    console.log(`Access via: http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
});
