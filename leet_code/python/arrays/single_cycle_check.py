# O(n) time | O(1) space
def hasSingleCycle(array):
    START_IDX = 0
    num_elt_visited = 0
    current_idx = START_IDX

while num_elt_visited < len(array):
    if num_elt_visited > 0 and current_idx == START_IDX:
        return False
    current_idx = getNext(current_idx, array)
    num_elt_visited += 1
	return current_idx == START_IDX


def getNext(idx, array):
	next_idx = (idx + array[idx]) % len(array)
	if next_idx < 0:
		next_idx += len(array)

	return next_idx
