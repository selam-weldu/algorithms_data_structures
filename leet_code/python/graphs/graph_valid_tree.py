# O(v+e) time and space
from collections import defaultdict
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:

        visited = set()
        graph = defaultdict(list)
        for x, y in edges:
            graph[x].append(y)
            graph[y].append(x)

        count = 0
        for i in range(n):
            if i not in visited:
                self.dfs(i, graph, visited)
                count += 1

        """Additional Condition Check."""
        return count == 1 and len(edges) < n:

    def dfs(self, n, graph, visited):
        if n in visited:
            return
        visited.add(n)
        for x in graph[n]:
            self.dfs(x, graph, visited)
