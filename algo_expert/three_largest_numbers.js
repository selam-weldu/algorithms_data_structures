function findThreeLargestNumbers(array) {
    // Write your code here.
    if (array.length < 3) return []
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity


    for (let i = 0; i < array.length; i++) {
        if (array[i] > first) {
            third = second
            second = first
            first = array[i]
        } else if (array[i] > second) {
            third = second
            second = array[i]
        } else if (array[i] > third) {
            third = array[i]
        }
    }
    return [third, second, first]
}