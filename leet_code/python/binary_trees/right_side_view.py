# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# O(n) time, O(b) space b: max number of nodes at any single depth
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        
        result = []
        queue = collections.deque()
        queue.append(root)
        while queue:
            level = []
            size = len(queue)
            for _ in range(size):
                node = queue.popleft()
                if node:
                    level.append(node.val)

                    if node.left: 
                        queue.append(node.left)
                    if node.right:
                        queue.append(node.right)
            if level:
                result.append(level[-1])
        
        return result