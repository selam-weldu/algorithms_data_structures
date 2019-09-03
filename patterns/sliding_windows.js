const maxSubarray = (arr,num) => {
    // init temp and maxSum
    // calcu sum of first num numbers
    // set temp and maxSum to the calcu sum
    // loop over arr starting from i = num,
    // to temp sum add arr[i] and subtract arr[i-num]
    // update maxSum accordingly
    // return maxSum

    if(arr.length < num) return null;

    let temp = 0, 
        maxSum = 0;

    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }

    maxSum = temp;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        // if(temp > maxSum) maxSum = temp;
        maxSum = Math.max(temp, maxSum);
    }

    return maxSum;

}