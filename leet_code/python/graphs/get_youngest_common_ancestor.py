# O(d) time | O(1) space - d is depth of the lower node

# This is an input class. Do not edit.
class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None


def getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):
    if descendantOne.name == topAncestor.name or topAncestor.name == descendantTwo.name:
		return topAncestor

	if descendantOne.name == descendantTwo.name:
		return descendantOne.ancestor
	
	node_one, node_two = level(topAncestor, descendantOne, descendantTwo)
	
	while node_one.name != node_two.name:
		node_one = node_one.ancestor
		node_two = node_two.ancestor

	return node_one

def level(top,one,two):	
	depth_one = getDepth(top,one)
	depth_two = getDepth(top,two)
	
	if depth_one > depth_two:
		lower = one
		higher = two
	elif depth_one < depth_two:
		lower = two
		higher = one
	else:
		return one, two
	
	difference = abs(depth_one - depth_two)
	
	while difference > 0:
		lower = lower.ancestor
		difference -= 1
	return lower, higher
		
def getDepth(top, node):
	depth = 0
	
	while node.ancestor:
		node = node.ancestor
		depth += 1
		
	return depth
