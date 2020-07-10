class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(set)
        indegree = defaultdict(int)
        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)
            indegree[u] += 1
            indegree[v] += 1
        
        leaves = []
        for x in range(n):
            if indegree[x] <= 1:
                leaves.append(x)
                indegree[x] = 0
        
        processed_leafs = len(leaves)
        while processed_leafs < n:
            new_leaves = []
            for leave in leaves:
                for neighbor in graph[leave]:
                    indegree[neighbor] -= 1
                    if indegree[neighbor] == 1:
                        new_leaves.append(neighbor)
                indegree[leave] = 0
            processed_leafs += len(new_leaves)
            leaves = new_leaves
        return leaves
                        
                        
     
                    
        
        