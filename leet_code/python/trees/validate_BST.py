# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# O(n) time, O(d) space
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        return self.helper(root, float("-inf"), float("inf"))

    def helper(self, node, min_value, max_value):
        if node is None:
            return True
        if node.val <= min_value or node.val >= max_value:
            return False
        left = self.helper(node.left, min_value, node.val)
        right = self.helper(node.right, node.val, max_value)

        return left and right
