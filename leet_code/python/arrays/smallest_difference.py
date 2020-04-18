# O(nlogn) + O(mlogm) time | O(1) space
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()

    current_smallest = []
    smallest_difference = float("inf")

    idx1, idx2 = 0, 0
    while idx1 < len(arrayOne) and idx2 < len(arrayTwo):
        first = arrayOne[idx1]
        second = arrayTwo[idx2]

        difference = first - second
        if difference == 0:
            return [first, second]
        elif difference < 0:
            idx1 += 1
        else:
            idx2 += 1

        if abs(difference) <= smallest_difference:
            smallest_difference = abs(difference)
            current_smallest = [first, second]

    return current_smallest
