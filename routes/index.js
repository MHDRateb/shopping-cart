const express = require('express');
const router = express.Router();


const dbClient = require('../helper/dbClient.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500)
    }
    else {
      res.render('index', {
        title: 'AcmeInc',
        description: 'We sell the finest goods and services.',
        products,
      });
    }
  }
  dbClient.getproducts({}, callBack)
});
/* GET product page. */

router.get('/products/:urlPath', function (req, res,next) {
  const urlPath = req.params.urlPath;
  const callBack = (error, product) => {
    if (error) {
      res.sendStatus(500)
    }
    else {
      res.render('single-product', {
        title: product.productTitle,
        description: product.commentTitle,
        product:product,
      });
    }
  }
  dbClient.getcomments({urlPath}, callBack)
});

module.exports = router;