# outerloop:
# 		forward: checks if matching pair exists if so appends
# 		backward:  add pari into hash
# time: O(n^2) avg ,  O(n^3) worst
# O(n^2) space
def fourNumberSum(array, targetSum):
    pair_sums = {}
	quadriplets = []
	
	for i in range(1,len(array)-1):
		
		for j in range(i+1,len(array)):
			current = array[i] + array[j]
			match = targetSum - current
			if match in pair_sums:
				for pair in pair_sums[match]:
					quadriplets.append(pair + [array[i], array[j]])
		
		for k in range(0,i):
			current = array[k] + array[i]
			if current in pair_sums:
				pair_sums[current].append([array[k],array[i]])
			else:
				pair_sums[current] = [[array[k], array[i]]]

	return quadriplets
