// average : O(n^2) time 
// worst : O(n^3) time
// O(n^2) space
function fourNumberSum(array, targetSum) {
    // regular outside loop, and two nested loops
    // first loop sums up a pair and checks if the
    // 	complementary pair exists in a hash table
    // 	if it does adds all four numbers to the result array
    // 	second loop goes from start to current element and 
    // 	maps the current sum to the pair

    let pairSums = {};
    let quadriplets = [];
    let currentSum, difference;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            currentSum = array[i] + array[j];
            difference = targetSum - currentSum;
            if (difference in pairSums) {
                for (let pair of pairSums[difference]) {
                    quadriplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }

        for (let k = 0; k < i; k++) {
            currentSum = array[k] + array[i];
            if (currentSum in pairSums) {
                pairSums[currentSum].push([array[k], array[i]]);
            } else {
                pairSums[currentSum] = [[array[k], array[i]]]
            }
        }
    }
    return quadriplets;
}

