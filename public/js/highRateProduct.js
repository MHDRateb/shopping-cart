const dbChange = require('../../helper/dbChange.js');
const dbClient = require('../../helper/dbClient.js');



const callBack = (error, products) => {
    if (error) {
        res.sendStatus(500)
    }
    else {
        dbChange.applyRating({}, false);
        let ratings = [];
        for (i = 0; i < products.length; i++) {
            ratings.push(parseFloat(products[i].rating.substring(0, products[i].rating.indexOf("/"))))
        }
        let maxRate = Math.max.apply(Math, ratings);
        let maxProduct = products[ratings.indexOf(maxRate)];

        dbChange.applyRating(maxProduct, true);
    }
}
dbClient.getProducts({}, callBack)

//  console.log(maxProduct);




// module.exports = {
//     applyTopProduct
// };
