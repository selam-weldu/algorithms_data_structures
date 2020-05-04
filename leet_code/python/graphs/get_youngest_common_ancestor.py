# O(d) time | O(1) space - d is depth of the lower node

# This is an input class. Do not edit.
class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None


def getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):

	node_one, node_two = level(descendantOne, descendantTwo)
	while node_one != node_two:
		node_one = node_one.ancestor
		node_two = node_two.ancestor
	return node_one


def level(one, two):
	depth_one = getDepth(one)
	depth_two = getDepth(two)

	if depth_one > depth_two:
		lower, higher = one, two
	else:
		lower, higher = two, one

	difference = abs(depth_one - depth_two)
	while difference > 0:
		lower = lower.ancestor
		difference -= 1
	return lower, higher


def getDepth(node):
	depth = 0
	while node.ancestor:
		node = node.ancestor
		depth += 1
	return depth
