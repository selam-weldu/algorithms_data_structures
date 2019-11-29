# O(n) time, O(h) spacew
class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root: return False
        if not root.left and not root.right:
            return sum == root.val
        
        left = self.hasPathSum(root.left, sum - root.val)
        right = self.hasPathSum(root.right, sum - root.val)
        
        return left or right