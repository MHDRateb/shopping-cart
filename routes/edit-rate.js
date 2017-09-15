const express = require('express');
const router = express.Router();
const dbChange = require('../helper/dbChange.js');
const calculateRating = require('./calculate-rating.js');

router.post('/', (req, res) => {
    const callBack = (err) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.redirect('/');
        }
    }
    if (req.body.rates === undefined) {
        console.log("sorry you did not choose any rate");
    }
    else if (req.body.productRatings === undefined) {
        let rates = [];
        const ratings = calculateRating(req, rates);
        let query = req.body.title;
        dbChange.editRate(query, ratings, callBack);
    }
    else if (req.body.productRatings.length === 1) {
        let rates = [];
        rates.push(req.body.productRatings);
        const ratings = calculateRating(req, rates);
        let query = req.body.title;
        dbChange.editRate(query, ratings, callBack);
    }
    else {
        let rates = req.body.productRatings;
        const ratings = calculateRating(req, rates);
        let query = req.body.title;
        dbChange.editRate(query, ratings, callBack);
    }
})


module.exports = router;