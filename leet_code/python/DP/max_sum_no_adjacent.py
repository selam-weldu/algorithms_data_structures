# O(n) time | O(1) space
def maxSubsetSumNoAdjacent(array):
    if not array:
		return 0
	if len(array) == 1:
		return array[0]
	
	first = array[0]
	second = max(array[0],array[1])
	
	for i in range(2,len(array)):
		current = max(second, first + array[i])
		first = second
		second = current
		
	return second



# O(n) time and space
def maxSubsetSumNoAdjacent(array):
	if not array:
		return 0
	if len(array) == 1:
		return array[0]

	max_sum = array[:]
	max_sum[1] = max(array[0],array[1])
	
	for i in range(2,len(array)):
		max_sum[i] = max(max_sum[i-1], max_sum[i-2]+array[i])
	return max_sum[-1]

