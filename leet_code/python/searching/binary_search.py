# time: O(logn) | space: O(1)
def binarySearch(array, target):
    return binary(array, target, 0, len(array)-1)


def binary(array, target, left, right):
	while left <= right:
		middle = (left + right) // 2
		potential = array[middle]

		if potential == target:
			return middle
		elif potential > target:
			right = middle - 1
		else:
			left = middle + 1
	return -1



# # time: O(logn) | space: O(logn)
# def binarySearch(array, target):
#     return binary(array, target, 0, len(array)-1)


# def binary(array, target, left, right):
# 	if left > right:
# 		return -1
# 	middle = (left+right)//2
# 	potential = array[middle]

# 	if target == potential:
# 		return middle
# 	elif potential > target:
# 		return binary(array, target, left, middle-1)
# 	else:
# 		return binary(array, target, middle+1, right)


