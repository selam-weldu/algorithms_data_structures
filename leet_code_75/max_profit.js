const maxProfit = (prices) => {
    let minPrice = Infinity;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i]
        if (minPrice > price) {
            minPrice = price
        } else if (minPrice < price) {
            const newProfit = price - minPrice;

            if (newProfit > profit) profit = newProfit;
        }
    }

    return profit;
};

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Not 7 - 1 = 6, as selling price needs to be larger than buying price.

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.