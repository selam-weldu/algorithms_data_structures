
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

###########

# O(n) time | O(h) space
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        return self.get_height(root) != float("-inf")
    
    def get_height(self,node):
        if not node:
            return -1
        
        left = self.get_height(node.left)
        right = self.get_height(node.right)
        
        if (left == float("-inf") or (right == float("-inf")) ) or abs(left - right) > 1:
            return float("-inf")
        else:
            return max(left,right) + 1