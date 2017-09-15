const { MongoClient } = require('mongodb');
var assert = require('assert');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

const editRate = (query, ratings, callback) => {
  MongoClient.connect(mongoConnection, function (err, db) {
    assert.equal(null, err);
    db.collection('products').updateMany(
      { "title": query },
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
  editRate
};
