# O(n) time, O(n) space
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        stack = [root]

        while len(stack):
            node = stack.pop()
            if node:
                node.left, node.right = node.right, node.left
                stack.append(node.left)
                stack.append(node.right)
        return root


# O(n) time, O(d) space
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root is None:
            return
        root.left, root.right = root.right, root.left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root


