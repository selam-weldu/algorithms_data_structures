function maxProfit(arr){
    // min and profit
    // set min to Infinity, profit to zero
    // iterate over arr,
    // check if ele < min,
    // if yes, min = ele
    // else , currentProfit = ele - min
    // if currentProfit > profit, profit = currentProfit
    // return profit at the end

    let minValue = Infinity,
        profit = 0;

    for(let price of arr){
        if(price < minValue){
            minValue = price
        }else{
            let currentProfit = price - minValue;
            if(currentProfit > profit) profit = currentProfit;
        }
    }
    return profit;

}