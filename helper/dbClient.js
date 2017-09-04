const mongoose = require('mongoose');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';
const Product = require('../models/Product.js');
const Comment = require('../models/Comment.js');
mongoose.connect(mongoConnection);

const getproducts = (query, sucessCallBack) => {
    Product.find(query, sucessCallBack);
}

const getcomments = (query, sucessCallBack) => {
    Comment.findOne(query, sucessCallBack);
}

module.exports = {
    getproducts,
    getcomments
};