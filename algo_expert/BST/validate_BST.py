// when we explore tree.right, that node's upperbound is the current node
// when we explore tree.left, that node's lowerbound is the current node

// Time O(n), space O(D), D is the longest depth

# This is an input class. Do not edit.


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBst(tree):
    return validate(tree, float("-inf"), float("inf"))


def validate(node, min_value, max_value):
	if not node:
		return True
	if node.value >= max_value or node.value < min_value:
		return False
	left = validate(node.left, min_value, node.value)
	right = validate(node.right, node.value, max_value)

	return left and right
