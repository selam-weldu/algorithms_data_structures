# O(n) time | O(n) space
def branchSums(root):
    sums = []
	add(root, 0, sums)
	return sums


def add(node, current_sum, sums):
	if not node:
		return
		
	current_sum += node.value
	if not node.left and not node.right:
		sums.append(current_sum)

	add(node.left, current_sum, sums)
	add(node.right, current_sum, sums)
