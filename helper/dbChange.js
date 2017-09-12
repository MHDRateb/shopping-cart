const { MongoClient } = require('mongodb');
var assert = require('assert');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopcentre';

const applyRating = (query, theChange) => {
  MongoClient.connect(mongoConnection, function (err, db) {
    assert.equal(null, err);

    updateRating(db, query, theChange, function () {
      db.close();
    });
  });

}


var updateRating = function (db, query, theChange, callback) {
  db.collection('products').updateMany(
    query,
    {
      $set: { isTopRated: theChange },
    }
    ,
    function (err, results) {
      console.log(results);
      callback();
    });
  db.close();
};


module.exports = {
  applyRating
};
