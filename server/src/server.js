const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

const { Email } = require('../models/emailSchema');
const { Article } = require('../models/articleSchema');
const { Comment } = require('../models/commentSchema');

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

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/raisehive';

mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
})
.then(() => {
    console.log('✅ Connected to MongoDB successfully');
    console.log(`Database: ${mongoose.connection.name}`);
})
.catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error.message);
    console.log('💡 Make sure MONGODB_URI is set in .env file');
    console.log('💡 For MongoDB Atlas, whitelist IP: 0.0.0.0/0 (allow all)');
});

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
        const newEmail = new Email({ email });
        await newEmail.save();
        res.status(200).send({ message: 'Subscribed successfully' });
    } catch (err) {
        if (err.code === 11000) {
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
        const emails = await Email.find({});
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
app.get('/replyke-articles/:article_id', async (req, res) => {
    try {
        const { article_id } = req.params;

        const article = await Article.findOne({ article_id }).lean();

        if (!article) {
            return res.status(404).send();
        }

        return res.status(200).send(article);
    } catch (err) {
        console.error('Get article error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Like an article
app.post('/replyke-articles/like', async (req, res) => {
    try {
        const { article_id, user_id } = req.body;

        if (!article_id || !user_id) {
            return res.status(400).send('Missing article_id or user_id in request body');
        }

        const article = await Article.findOne({ article_id }).lean();

        let newArticle;

        if (article) {
            if (article.likes.includes(user_id)) {
                return res.status(409).send('User already liked article');
            }

            newArticle = await Article.findOneAndUpdate(
                { article_id },
                {
                    $inc: { likes_count: 1 },
                    $push: { likes: user_id },
                },
                { new: true }
            );
        } else {
            newArticle = new Article({
                article_id,
                likes: [user_id],
                likes_count: 1,
                comments_count: 0,
                replies_count: 0,
            });
            await newArticle.save();
        }

        return res.status(200).send(newArticle);
    } catch (err) {
        console.error('Like article error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Unlike an article
app.post('/replyke-articles/unlike', async (req, res) => {
    try {
        const { article_id, user_id } = req.body;

        if (!article_id || !user_id) {
            return res.status(400).send('Missing article_id or user_id in request body');
        }

        const article = await Article.findOne({ article_id }).lean();

        if (!article || !article.likes.includes(user_id)) {
            return res.status(409).send("Can't unlike, as user didn't like article or article not found");
        }

        const updatedArticle = await Article.findOneAndUpdate(
            { article_id },
            {
                $inc: { likes_count: -1 },
                $pull: { likes: user_id },
            },
            { new: true }
        );

        return res.status(200).send(updatedArticle);
    } catch (err) {
        console.error('Unlike article error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Get comments with pagination
app.get('/replyke-comments', async (req, res) => {
    try {
        const { article_id, sort_by, parent, page = 1, limit = 5 } = req.query;

        const limitAsNumber = Number(limit);
        const pageAsNumber = Number(page);

        if (isNaN(limitAsNumber) || isNaN(pageAsNumber) || pageAsNumber < 1) {
            return res.status(400).send('Invalid pagination parameters');
        }

        let sort = {};
        if (sort_by === 'popular') {
            sort = { likes_count: -1, created_at: -1 };
        } else if (sort_by === 'newest') {
            sort = { created_at: -1 };
        } else if (sort_by === 'oldest') {
            sort = { created_at: 1 };
        }

        const skipCount = (pageAsNumber - 1) * limitAsNumber;

        const query = { article_id };
        if (parent) {
            query.parent = parent;
        } else {
            query.parent = null;
        }

        const comments = await Comment.find(query)
            .limit(limitAsNumber)
            .skip(skipCount)
            .sort(sort);

        return res.status(200).send(comments);
    } catch (err) {
        console.error('Get comments error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Post a new comment
app.post('/replyke-comments', async (req, res) => {
    try {
        const { article_id, comment_body, parent, author } = req.body;

        if (!article_id || !comment_body || !author) {
            return res.status(400).send('Missing required comment details');
        }

        const comment = new Comment({
            article_id,
            body: comment_body,
            parent: parent || null,
            likes: [],
            likes_count: 0,
            replies_count: 0,
            created_at: new Date(),
            author,
        });
        await comment.save();

        if (parent) {
            await Comment.findByIdAndUpdate(parent, {
                $inc: { replies_count: 1 },
            });
        }

        const article = await Article.findOne({ article_id }).lean();

        if (article) {
            const updateField = parent
                ? { $inc: { replies_count: 1 } }
                : { $inc: { comments_count: 1 } };
            await Article.findOneAndUpdate({ article_id }, updateField);
        } else {
            const newArticle = new Article({
                article_id,
                likes: [],
                likes_count: 0,
                comments_count: 1,
                replies_count: 0,
            });
            await newArticle.save();
        }

        return res.status(200).send(comment);
    } catch (err) {
        console.error('Post comment error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Delete a comment and its replies
app.delete('/replyke-comments', async (req, res) => {
    try {
        const { comment_id } = req.body;

        if (!comment_id) {
            return res.status(400).send('Comment ID is required');
        }

        const targetComment = await Comment.findById(comment_id).lean();
        if (!targetComment) {
            return res.status(404).send('Comment not found');
        }

        let firstLevelCommentsDeletedCount = 0;
        let repliesDeletedCount = 0;

        async function deleteCommentAndChildren(commentId) {
            const comment = await Comment.findByIdAndDelete(commentId).lean();

            if (!comment) {
                throw new Error('Comment deletion failed');
            }

            comment.parent ? repliesDeletedCount++ : firstLevelCommentsDeletedCount++;

            const childComments = await Comment.find({ parent: comment._id }).lean();
            for (const childComment of childComments) {
                await deleteCommentAndChildren(childComment._id);
            }
        }

        await deleteCommentAndChildren(comment_id);

        if (targetComment.parent) {
            await Comment.findByIdAndUpdate(targetComment.parent, {
                $inc: { replies_count: -1 },
            });
        }

        const article = await Article.findOneAndUpdate(
            { article_id: targetComment.article_id },
            {
                $inc: {
                    comments_count: -firstLevelCommentsDeletedCount,
                    replies_count: -repliesDeletedCount,
                },
            },
            { new: true }
        );

        if (!article) {
            throw new Error('Article not found for updating comment counts');
        }

        return res.status(200).send(article);
    } catch (err) {
        console.error('Delete comment error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Update a comment
app.patch('/replyke-comments', async (req, res) => {
    try {
        const { update, comment_id } = req.body;

        if (!update || !comment_id) {
            return res.status(400).send('Update content and comment ID are required');
        }

        const updatedComment = await Comment.findOneAndUpdate(
            { _id: comment_id },
            { body: update },
            { new: true }
        );

        if (!updatedComment) {
            return res.status(404).send('Comment not found or update failed');
        }

        return res.status(200).send(updatedComment);
    } catch (err) {
        console.error('Update comment error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Like a comment
app.post('/replyke-comments/like', async (req, res) => {
    try {
        const { comment_id, user_id } = req.body;

        if (!comment_id || !user_id) {
            return res.status(400).send('Comment ID and user ID are required');
        }

        const comment = await Comment.findById(comment_id).lean();
        if (!comment) {
            return res.status(404).send('Comment not found');
        }

        if (comment.likes.includes(user_id)) {
            return res.status(409).send('User has already liked this comment');
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            comment_id,
            { $inc: { likes_count: 1 }, $push: { likes: user_id } },
            { new: true }
        );

        return res.status(200).send(updatedComment);
    } catch (err) {
        console.error('Like comment error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

// Unlike a comment
app.post('/replyke-comments/unlike', async (req, res) => {
    try {
        const { comment_id, user_id } = req.body;

        if (!comment_id || !user_id) {
            return res.status(400).send('Comment ID and user ID are required');
        }

        const comment = await Comment.findById(comment_id).lean();
        if (!comment) {
            return res.status(404).send('Comment not found');
        }

        if (!comment.likes.includes(user_id)) {
            return res.status(409).send("User hasn't liked this comment");
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            comment_id,
            { $inc: { likes_count: -1 }, $pull: { likes: user_id } },
            { new: true }
        );

        return res.status(200).send(updatedComment);
    } catch (err) {
        console.error('Unlike comment error:', err);
        return res.status(500).send({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
    console.log(`Access via: http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
});
