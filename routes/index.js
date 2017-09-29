const express = require('express');
const router = express.Router();
const dbClient = require('../helper/dbClient.js');
const calculateRating = require('./calculate-rating.js');
const { ObjectID } = require('mongodb');

/* GET home page. */
router.get('/', function (req, res, next) {
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('index', {
                title: 'AcmeInc',
                description: 'We sell the finest goods and services.',
                products,
            });
        }
    }
    dbClient.getProducts({}, callBack)

});

/* GET single-product information page. */
router.get('/products/:urlPath', function (req, res, next) {
    const urlPath = req.params.urlPath;
    const callBack = (error, products) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.render('single-product', {
                title: products[0].title,
                description: `We sell the finest goods and services. 
 
                This is the ${products[0].title}.`,

                product: products[0]
            });
        }
    }
    dbClient.getProducts({ urlPath }, callBack);

});


router.post('/products/:productid/ratings', (req, res) => {
    const callBack = (err) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.redirect('/');
        }
    }
    let rates = req.body.productRatings;
    const ratings = calculateRating(req, rates);
    let query = req.params.productid;
    dbClient.editRate(ObjectID(query), ratings, callBack);
})


module.exports = router;