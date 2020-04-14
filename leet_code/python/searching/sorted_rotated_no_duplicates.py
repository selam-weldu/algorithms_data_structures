# Algorithm 1

# O(logn) time | O(1) space
def shiftedBinarySearch(array, target):
    if not array or len(array) < 1:
		return -1

	start = 0
	end = len(array) - 1
	
	while start <= end:
		mid = (start + end) // 2
		if array[mid] == target:
			return mid
# 		start to mid-1 is sorted
		if array[start] <= array[mid]:
			if array[start] <= target <= array[mid]:
				end = mid - 1
			else:
				start = mid + 1
# 		mid+1 to end is sorted
		elif array[mid] <= array[end]:
			if array[mid] <= target <= array[end]:
				start = mid + 1
			else:
				end = mid - 1
	return -1


# Algorithm 2
# O(log n) time  | O(1) space

# def shiftedBinarySearch(nums, target):
#     if not nums:
# 		return -1

# 	pivot = find_pivot(nums,target,0,len(nums)-1)

# 	if nums[pivot] == target:
# 		return pivot

# 	if nums[0] > target:
# 		return binary_search(nums, target, pivot + 1, len(nums) - 1)
# 	else:
# 		return binary_search(nums, target, 0, pivot - 1)

# def find_pivot(arr,target,left,right):
# 	if arr[0] <= arr[-1]:
# 		return 0

# 	start, end = left, right

# 	while(start <= end):
# 		mid = (start + end) // 2

# 		if arr[mid] > arr[mid + 1]:
# 			return mid + 1

# 		if arr[start] <= arr[mid]:
# 			start = mid + 1
# 		else:
# 			end = mid - 1
# 	return 0

# def binary_search(arr, target, low, high):
	
# 	while(low <= high):

# 		mid = (low+high)//2

# 		if target < arr[mid]:
# 			high = mid-1
# 		elif target > arr[mid]:
# 			low = mid+1
# 		else:
# 			return mid

# 	return -1
