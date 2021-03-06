const Product = require('../models/Products');
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

const getProducts = (query, sucessCallBack) => {
    mongoose.connect(mongoConnection);
    Product.find(query, sucessCallBack);
};

const addProducts = (query, sucessCallBack) => {
    mongoose.connect(mongoConnection);
    const newProduct = new Product(query);
    newProduct.save(query, sucessCallBack);
};

const addComments = (comment, sucessCallBack) => {
    mongoose.connect(mongoConnection);
    const newComment = new Comment(comment);
    newComment.save(sucessCallBack);
};

module.exports = {
    getProducts,
    addProducts,
    addComments,
};
