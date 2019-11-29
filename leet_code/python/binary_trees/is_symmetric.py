
# O(n) time, O(h) space
def is_symmetric(root):
    if not root:
        return True

    return check_symmetry(root.left, root.right)


def check_symmetry(left_node, right_node):
    if not left_node and not right_node:
        return True
    elif (not left and right) or (left and not right):
        return False
    else:
        if left_node.val != right_node.val:
            return False
        else:
            outer = check_symmetry(left_node.left, right_node.right)
            inner = check_symmetry(left_node.right, right_node.left)
            return outer and inner