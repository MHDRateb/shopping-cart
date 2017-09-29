const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema({

    urlPath: String,
    title: String,
    price: Number,
    rating: { type: Number, default: 3 },
    productRatings: { type: Array, default: [] },
    commentCount: {
        type: Number,
        default: 1,
    },
    isTopRated: Boolean,
});

const Products = mongoose.model('Product', schema);

module.exports = Products;
