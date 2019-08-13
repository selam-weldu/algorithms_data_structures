// Time: O(n^2) // after sorting(nlogn) there are two loops that iterate through the entire array
// Space: O(n) // every number in the array might show up in a triplet 
function threeNumberSum(array, targetSum) {
    // Write your code here.
    array = array.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            let currentSum = array[i] + array[left] + array[right]
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]])
                left += 1
                right -= 1
            } else if (currentSum < targetSum) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return triplets
}