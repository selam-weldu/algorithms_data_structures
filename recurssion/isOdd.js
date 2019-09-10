// Takes in an array and a callback
// returns true if a single value in the array is true when passed to callback
function someRecursive(arr, cb) {
    if (!arr.length) return false;

    if (cb(arr[0])) return true;

    return someRecursive(arr.slice(1), cb);
}