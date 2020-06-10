# O(v+e) time | space
from collections import defaultdict
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
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
        return count

    def dfs(self, n, graph, visited):
        if visited[n]:
            return
        visited[n] = True
        for x in graph[n]:
            self.dfs(x, graph, visited)
