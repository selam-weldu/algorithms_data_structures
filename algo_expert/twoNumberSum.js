function twoNumberSum(array, targetSum) {
    // Write your code here.
    let map = {}
    for (let i = 0; i < array.length; i++) {
        let match = targetSum - array[i]
        if (match in map) {

            return [match, array[i]].sort((a, b) => a - b)
        } else {
            map[array[i]] = i
        }

    }
    return []
}