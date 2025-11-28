const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    article_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    likes: {
        type: [String],
        default: []
    },
    likes_count: {
        type: Number,
        default: 0
    },
    comments_count: {
        type: Number,
        default: 0
    },
    replies_count: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article, articleSchema };
