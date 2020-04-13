# time : O(n) | space: O(1)
def findThreeLargestNumbers(array):
	if not array or len(array) < 3:
		return []

	first = second = third = float("-inf")

	for num in array:
		if num >= first:
			third = second
			second = first
			first = num
		elif num >= second:
			third = second
			second = num
		elif num >= third:
			third = num

	return [third, second, first]
