# O(nm) time | O(n) space
# n: nodes in s, m:nodes in t
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if s is None:
            return False

        if self.isSame(s, t):
            return True

        return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)

    def isSame(self, p, q):
        if p == q == None:
            return True

        if (not p and q) or (not q and p):
            return False

        if p.val != q.val:
            return False

        return self.isSame(p.left, q.left) and self.isSame(p.right, q.right)
