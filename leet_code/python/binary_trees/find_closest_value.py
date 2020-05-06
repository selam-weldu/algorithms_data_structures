# O(d) time | O(1) space
# d: depth of tree

def findClosestValueInBst(tree, target):
    smallest_diff = float("inf")
    closest = None
    current = tree

    while current:
        diff = abs(current.value - target)
        if diff < smallest_diff:
            smallest_diff = diff
            closest = current.value

        if current.value < target:
            current = current.right
        elif current.value > target:
            current = current.left
        else:
            return current.value

    return closest
