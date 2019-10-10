// O(n) time, O(1) space
function subarraySort(array) {
    // 	input array, output [-1,-1] if array is sorted
    // 	else array with start and end position of the smallest
    // 	subarray that needs to be sorted

    // iterate array and find the max and min numbers out of order
    // 	then find the sorted positions
    // 	for the min start from the left
    // 	for the max start searching from the right

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (isOutOfOrder(array, num, i)) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
    }

    minPosition = 0;
    while (min >= array[minPosition]) {
        ++minPosition;
    }

    maxPosition = array.length - 1;
    while (max <= array[maxPosition]) {
        --maxPosition;
    }

    if (min === Infinity) return [-1, -1];
    return [minPosition, maxPosition];
}

function isOutOfOrder(arr, num, idx) {
    if (idx === 0) {
        return num > arr[1];
    }
    if (idx === arr.length - 1) {
        return num < arr[idx - 1]
    }

    return num > arr[idx + 1] || num < arr[idx - 1];
}
