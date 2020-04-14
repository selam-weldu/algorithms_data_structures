# O(log n) time | O(1) space
def peakIndexInMountainArray(A):
    if not A or len(A) < 3:
        return -1

    start = 0
    end = len(A) - 1

    while start <= end:
        mid = (start + end) // 2

        if A[mid - 1] <= A[mid] and A[mid] >= A[mid + 1]:
            return mid
        elif A[mid - 1] > A[mid]:
            end = mid - 1
        else:
            start = mid + 1
    return -1
