# time: O(nlogn) | space: O(nlogn) ?
# not in place
# stable


def mergeSort(array):
	if len(array) <= 1:
		return array

	middle = len(array) // 2
	left = array[:middle]
	right = array[middle:]
	return merge(mergeSort(left), mergeSort(right))


def merge(left, right):
	merged = [None] * (len(left) + len(right))
	i = j = k = 0

	while i < len(left) and j < len(right):
		if left[i] <= right[j]:
			merged[k] = left[i]
			i += 1
		else:
			merged[k] = right[j]
			j += 1
		k += 1

	while i < len(left):
		merged[k] = left[i]
		i += 1
		k += 1
	while j < len(right):
		merged[k] = right[j]
		j += 1
		k += 1

	return merged
