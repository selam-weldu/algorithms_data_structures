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

// const maxSubArray = function (arr) {
//     if (arr.length == 0) return 0;
    
//     let temp = 0,
//         maxSum = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         temp += arr[i];
//         maxSum = Math.max(temp, maxSum);
//         temp = temp < 0 ? 0 : temp;
//     }
//     return maxSum;
// };

// const maxSubArray = function (nums) {
//     let cur = nums[0];
//     let res = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (cur < 0) {
//             cur = nums[i];
//         }
//         else {
//             cur += nums[i];
//         }
//         res = Math.max(res, cur);
//     }
//     return res;
// };