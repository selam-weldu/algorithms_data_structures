function selectionSort(array) {
    // Write your code here.
    let start = 0
    while (start < array.length - 1) {
        let minIdx = start
        for (let i = start + 1; i < array.length; i++) {
            if (array[minIdx] > array[i]) {
                minIdx = i
            }
        }
        [array[start], array[minIdx]] = [array[minIdx], array[start]]
        start += 1
    }
    return array
}