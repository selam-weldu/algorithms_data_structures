# time: avg/best O(nlogn) worst O(n^2)
# space: O(logn)
# in place and unstable

def quickSort(array):
    quickSortHelper(array, 0, len(array) - 1)

    return array


def quickSortHelper(array, left, right):
	if left >= right:
	    return

	pivot = Partition(array, left, right)

    # tail recursion: to keep the space O(logn) instead of O(n)
	leftSubarraySmaller = (pivot - 1) - left < right - (pivot + 1)

	if leftSubarraySmaller:
		quickSortHelper(array, left, pivot-1)
		quickSortHelper(array, pivot+1, right)
	else:
		quickSortHelper(array, pivot+1, right)
		quickSortHelper(array, left, pivot-1)


def Partition(array, left, right):
	pivotIndex = (left+right) // 2
	swap(array, pivotIndex, right)

	i = left
	for j in range(left, right, 1):
		if array[j] <= array[right]:
			swap(array, i, j)
			i += 1

	swap(array, i, right)
	return i


def swap(array, i, j):
	array[i], array[j] = array[j], array[i]
