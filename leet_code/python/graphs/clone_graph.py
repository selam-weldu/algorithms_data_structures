"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = []):
        self.val = val
        self.neighbors = neighbors
"""

from collections import deque
# time and space: O(V + E)
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return node

        hashmap = {}
        # can't iterate over node
        queue = deque([node])
        hashmap[node] = Node(node.val)

        while queue:
            current_node = queue.popleft()

            for neighbor in current_node.neighbors:
                if neighbor not in hashmap:
                    hashmap[neighbor] = Node(neighbor.val) #creating a copy and adding to hash map
                    queue.append(neighbor) #append original node not copy

                # connecting the edges, must connect with copy
                hashmap[current_node].neighbors.append(hashmap[neighbor])

        return hashmap[node]
