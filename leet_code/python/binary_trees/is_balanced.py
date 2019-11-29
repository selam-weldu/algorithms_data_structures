
# class TreeNode:
#     def __init__(self,data=None):
#         self.data = data 
#         self.left = None 
#         self.right = None

# O(n) time
# O(h) space...h = log n for balanced tree, h = n for skewed
def is_balanced(root):
    return check_balanced(root)[0]

def check_balanced(node):
    if not node:
        return (True, - 1)

    left_result = check_balanced(node.left)
    if not left_result[0]: 
        return (False, 0)

    right_result = check_balanced(node.right)
    if not right_result[0]: 
        return (False, 0)

    is_balanced = abs(left_result[1] - right_result[1]) <= 1
    height = max(left_result[1],right_result[1]) + 1

    return (is_balanced, height)