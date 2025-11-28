const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    article_id: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    },
    likes: {
        type: [String],
        default: []
    },
    likes_count: {
        type: Number,
        default: 0
    },
    replies_count: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    author: {
        _id: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        img: {
            type: String,
            trim: true
        }
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment, commentSchema };
