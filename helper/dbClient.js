const Product = require('../models/Products');
const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');
var assert = require('assert');

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

const editRate = (query, ratings, callback) => {
  MongoClient.connect(mongoConnection, function (err, db) {
    assert.equal(null, err);
    db.collection('products').updateMany(
      {_id:query}  ,
      {
        $set: { rating: ratings.meanRates ,
                productRatings: ratings.rates }
      }
      ,
      function (err, results) {
        callback();
      });
  });
}


module.exports = {
     getProducts,
    addProducts,
    editRate
};
  
