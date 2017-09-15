
const ratingData = (req, rates) => {
    rates.push(req.body.rates);
    let sum = rates.reduce(add, 0);
    function add(a, b) {
        return parseInt(a) + parseInt(b);
    }
    let meanRates = sum / rates.length;
    return ratings = {
        meanRates,
        rates
    }
}

module.exports = ratingData;