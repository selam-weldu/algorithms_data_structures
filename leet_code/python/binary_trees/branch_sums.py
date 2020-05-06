# O(n) time | O(n) space
def branchSums(root):
    sums = []
    add(root, 0, sums)
    return sums


def add(node, current_sum, sums):
	if not node:
		return

	running_sum = current_sum + node.value
	if not node.left and not node.right:
		sums.append(running_sum)

	add(node.left, running_sum, sums)
	add(node.right, running_sum, sums)
