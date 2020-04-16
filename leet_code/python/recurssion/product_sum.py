# O(n) time | O(d) space
def productSum(array):
    return proSumHelper(array, 1)


def proSumHelper(array, depth):
	if not array or len(array) < 1:
		return 0

	curr_sum = 0
	for elt in array:
		if type(elt) is list:
			curr_sum += proSumHelper(elt, depth+1)
		else:
			curr_sum += elt
	return curr_sum * depth
