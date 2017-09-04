const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    productTitle:String,
    commentTitle: String,
    commentCount:Number,
});

const Comment = mongoose.model('comments', schema);

module.exports = Comment;