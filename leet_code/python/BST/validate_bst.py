# O(n) time | O(d) space
def validateBst(tree):
    return helper(tree, float("-inf"), float("inf"))


def helper(node, min_value, max_value):
	if not node:
		return True

	if node.value < min_value or node.value >= max_value:
		return False

	left = helper(node.left, min_value, node.value)
	right = helper(node.right, node.value, max_value)

	return left and right
