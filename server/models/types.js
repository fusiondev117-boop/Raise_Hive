/**
 * @typedef {Object} IArticle
 * @property {string} _id
 * @property {string} article_id
 * @property {string[]} likes
 * @property {number} likes_count
 * @property {number} comments_count
 * @property {number} replies_count
 * @property {Date} createdAt
 */

/**
 * @typedef {Object} IComment
 * @property {string} _id
 * @property {string} article_id
 * @property {string} body
 * @property {string} [parent]
 * @property {string[]} likes
 * @property {number} likes_count
 * @property {number} replies_count
 * @property {Date} created_at
 * @property {Object} author
 * @property {string} author._id
 * @property {string} author.name
 * @property {string} [author.img]
 */

/**
 * @typedef {Object} IEmail
 * @property {string} _id
 * @property {string} email
 * @property {Date} createdAt
 */

module.exports = {};
