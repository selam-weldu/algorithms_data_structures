// Time: O(n), n is number of ele in array
// Space: O(d), maximum depth of special array

function productSum(array, multiplier = 1) {
    let sum = 0;

    for (let ele of array) {
        if (Array.isArray(ele)) {
            sum += productSum(ele, multiplier + 1)
        } else {
            sum += ele
        }
    }
    return sum * multiplier;
}