# O(logn) time | O(1) space
def searchForRange(array, target):
    if not array:
		return [-1, -1]

	left_bound = search_first(array,target,0,len(array)-1)
	right_bound = search_last(array, target,0, len(array) - 1)
	
	return [left_bound,right_bound]

def search_first(array,target,left,right):
	result = -1
	
	while left <= right:
		middle = (left + right) // 2
		if array[middle] < target:
			left = middle + 1
		elif array[middle] > target:
			right = middle - 1
		else:
			result = middle
			right = middle - 1
	return result

def search_last(array,target,left,right):
	result = -1
	
	while left <= right:
		middle = (left + right) // 2
		if array[middle] < target:
			left = middle + 1
		elif array[middle] > target:
			right = middle - 1
		else:
			result = middle
			left = middle + 1
	return result


