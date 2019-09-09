// kadane's algorithm
function maxSubArray(arr){
    // if arr isEmpty return null
    // init tempSum and maxSum
    // tempSum(max sum upto current pos) is the max of arr[i] and tempSum + arr[i]
    // update maxSum accordingly
    // return maxSum

    if (arr.length === 0) return null;

    let runningSum = 0, maxSum = -Infinity;
    for (let num of nums) {
        runningSum = Math.max(runningSum + num, num);
        maxSum = Math.max(runningSum, maxSum);
    }
    return maxSum;
}



function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

