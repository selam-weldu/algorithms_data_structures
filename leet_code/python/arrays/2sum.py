# nested for loop
# O(n^2) time, O(1) space

# output, empty array if numbers don't exist
# the two numbers if they exist

# edge cases: empty array or one element array

# questions:
# distinct elements?


def twoNumberSum(array, targetSum):
	if len(array) < 2: return []
    pairs = []
	
	for num_one in range(len(array) - 1):
		for num_two in range(num_one + 1, len(array)):
			if array[num_one] + array[num_two] == targetSum:
				return [array[num_one],array[num_two]]
	
	return pairs

# O(n) time and space

# hashtable
# O(n) time and space 
def twoNumberSum(array, targetSum):
    pairs = set()
	
	for num in array:
		potential_match = targetSum - num
		if potential_match in pairs:
			return [num,potential_match]
		pairs.add(num)
		
	return []


# sort and two pointer
# O(nlogn) time | O(1) space

def twoNumberSum(array, targetSum):
    array.sort()
	left = 0
	right = len(array) - 1
	
	while left < right:
		current_sum = array[left] + array[right]
		
		if current_sum == targetSum:
			return [array[left],array[right]]
		elif current_sum > targetSum:
			right -= 1
		elif current_sum < targetSum:
			left += 1
			
	return []
