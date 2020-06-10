# O(v+e) time and space
from collections import defaultdict
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:

        visited = [False] * n
        graph = defaultdict(list)
        for x, y in edges:
            graph[x].append(y)
            graph[y].append(x)

        count = 0
        for i in range(n):
            if not visited[i]:
                self.dfs(i, graph, visited)
                count += 1

        """Additional Condition Check."""
        if count == 1 and len(edges) < n:
            return True
        else:
            return False

    def dfs(self, n, graph, visited):
        if visited[n]:
            return
        visited[n] = True
        for x in graph[n]:
            self.dfs(x, graph, visited)
