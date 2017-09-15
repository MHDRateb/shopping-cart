
const ratingData = (req, rates) => {
    rates.push(req.body.rates);
    let sum = rates.reduce(add, 0);
    function add(a, b) {
        return parseInt(a) + parseInt(b);
    }
    let meanRates = parseFloat(sum / rates.length).toPrecision(2);
    return ratings = {
        meanRates,
        rates
    }
}

module.exports = ratingData;