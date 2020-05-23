# O(nm) time | O(n) space
# n: nodes in s, m:nodes in t
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if s is None:
            return False

        if s.val == t.val:
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


# Advanced approach, O( |s | + | t|) (Merkle hashing):
# For each node in a tree, we can create node.merkle, a hash representing it's subtree.
# This hash is formed by hashing the concatenation of the merkle of the left child, the node's value, and the merkle of the right child. Then, two trees are identical if and only if the merkle hash of their roots are equal(except when there is a hash collision.) From there, finding the answer is straightforward: we simply check if any node in s has node.merkle == t.merkle


def isSubtree(self, s, t):
    from hashlib import sha256

    def hash_(x):
        S = sha256()
        S.update(x)
        return S.hexdigest()

    def merkle(node):
        if not node:
            return '#'
        m_left = merkle(node.left)
        m_right = merkle(node.right)
        node.merkle = hash_(m_left + str(node.val) + m_right)
        return node.merkle

    merkle(s)
    merkle(t)

    def dfs(node):
        if not node:
            return False
        return (node.merkle == t.merkle or
                dfs(node.left) or dfs(node.right))

    return dfs(s)
