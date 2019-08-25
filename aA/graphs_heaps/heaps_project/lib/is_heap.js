// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;

    let currentVal = array[idx];
    let left = (idx * 2);
    let right = (idx * 2) + 1;

    let result = currentVal > (array[left] || -Infinity) && currentVal > (array[right] || -Infinity);
    return result && isMaxHeap(array, left) && isMaxHeap(array, right);

}

// var findKthLargest = function (nums, k) {
//     let sorted = nums.sort((a, b) => Math.sign(a - b))
//     return sorted[sorted.length - k]
// };


module.exports = {
    isMaxHeap
};