# O(n) time and space


def twoNumberSum(array, targetSum):
    matches = set()

    for num in array:
        match = targetSum - num
        if match in matches:
            return [num, match]
        else:
            matches.add(num)

    return []

# O(nlogn) time, O(1) space


def twoNumberSum1(array, targetSum):
	array.sort()
	left, right = 0, len(array) - 1

	while left < right:
		current_sum = array[left] + array[right]
		if current_sum == targetSum:
			return [array[left], array[right]]
		elif current_sum < targetSum:
			left += 1
		else:
			right -= 1

	return []
