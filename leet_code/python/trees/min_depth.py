# O(db) time, O(b) space d: depth of tree, b: breadth of tree
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        depth = 0
        level = [root] if root else []

        while len(level):
            depth += 1
            queue = []
            for node in level:
                if not node.left and not node.right:
                    return depth

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            level = queue

        return depth

# O(n) time, O(n) space
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        if not root.left and not root.right:
            return 1

        if not root.left:
            return 1 + self.minDepth(root.right)

        if not root.right:
            return 1 + self.minDepth(root.left)

        return 1 + min(self.minDepth(root.left), self.minDepth(root.right))
