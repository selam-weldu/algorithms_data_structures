// O(n) time, O(1) space
var maxProfit = function (prices) {
    let maxProfit = 0;
    let buyingPrice = Infinity;
    let sellingPrice = 0;

    for (let price of prices) {
        if (price <= buyingPrice) {
            buyingPrice = price;
        } else {
            sellingPrice = price;
            maxProfit = Math.max(maxProfit, sellingPrice - buyingPrice);
        }
    }

    return maxProfit;
};