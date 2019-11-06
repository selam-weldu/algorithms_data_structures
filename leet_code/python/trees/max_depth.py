# O(n) time, O(n) space
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        # optimization
        if not root.left and not root.right:
            return 1

        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)

        return 1 + max(left, right)


# O(db) time, O(b) space d: depth of tree, b: breadth of tree
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        depth = 0
        level = [root] if root else []

        while len(level):
            depth += 1
            queue = []
            for node in level:
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                
            level = queue

        return depth
