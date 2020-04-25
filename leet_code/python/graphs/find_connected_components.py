def findComponents(graph, at):
    components = {}
    visited = {}
    count = 0

    for vertex in graph.keys():
        if not visited[vertex]:
            count += 1
            dfs(vertex,visited,graph,count)

    return (count,components)

def dfs(at,visited,graph,count):
    visited[at] = True
    component[count].append(at)