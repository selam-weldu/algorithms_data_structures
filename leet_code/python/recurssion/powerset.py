# O(n*2^n) time and space

def powerset(array):
    subsets = [[]] #keyyyy

    for elt in array:
        for i in range(len(subsets)):
            curr_sub = subsets[i]
            subsets.append(curr_sub + [elt])
    return subsets


# O(n*2^n) time and space

# def powerset(array):
#     return helper(array)


# def helper(array, idx=None):
# 	if idx == None:
# 		idx = len(array) - 1
# 	if idx < 0:
# 		return [[]]

# 	ele = array[idx]
# 	subsets = helper(array, idx - 1)

# 	for i in range(len(subsets)):
# 		curr_sub = subsets[i]
# 		subsets.append(curr_sub + [ele])
# 	return subsets
