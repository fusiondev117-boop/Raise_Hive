const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const articleSchema = new mongoose.Schema({
    article_id: {
        type: String,
        trim: true,
        required: true,
    },
    likes: {
        type: [String],
        default: [],
        required: true,
    },
    likes_count: {
        type: Number,
        default: 0,
        required: true,
    },
    comments_count: {
        type: Number,
        default: 0,
        required: true,
    },
    replies_count: {
        type: Number,
        default: 0,
        required: true,
    },
});

const Article = mongoose.models.Article ?? mongoose.model("Article", articleSchema);

module.exports = { articleSchema, Article };
