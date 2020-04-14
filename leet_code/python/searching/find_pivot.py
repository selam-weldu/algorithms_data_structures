# O(logn) time | O(1) space
def find_pivot(self, arr):

    if arr[0] <= arr[-1]:
        return 0

    start, end = 0, len(arr) - 1

    while(start <= end):
        mid = (start + end) // 2

        if arr[mid] > arr[mid + 1]:
            return mid + 1

        if arr[start] <= arr[mid]:
            start = mid + 1
        else:
            end = mid - 1
    return 0
