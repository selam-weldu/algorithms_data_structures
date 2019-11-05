# O(n) time, O(n) space
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:
            return True

        if (not p and q) or (not q and p):
            return False

        if p.val != q.val:
            return False

        left = self.isSameTree(p.left, q.left)
        right = self.isSameTree(p.right, q.right)

        return left and right


# O(n) time, O(1) space
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        stack = [[p, q]]
        while len(stack):
            node1, node2 = stack.pop()
            if not node1 and not node2:
                continue
            elif node1 and node2:
                if node1.val != node2.val:
                    return False
                stack.append([node1.left, node2.left])
                stack.append([node1.right, node2.right])
            else:
                return False
        return True
