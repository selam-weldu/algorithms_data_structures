# O(mn) time 
def search_maze(maze,s,e):
    if not len(maze): return False
    path = {}
    queue = collections.deque()
    queue.append(s)
    visited = maze[:]
    visited[s.x][s.y] =  2
    path[s] = None
    def get_neighbors(row,col):
        dr = [1,-1,0,0]
        dc = [0,0,1,-1]
        neighbors = []
        for i in range(len(dr)):
            r = row + dr[i]
            c = col + dc[i]

            if r < 0 or c < 0: continue
            if r >= len(maze) or c >= len(maze[0]): continue
            if visited[r][c] == 2: continue
            neighbors.append([r,c])
        return neighbors
        
    def sequence(node):
        result = []
        while node:
            result.append(node)
            node = path[node]
        return list(reverse(result))

    while len(queue):
        cell = queue.popleft()
        if visited[cell.x][cell.y] == 2:
            continue
        visited[cell.x][cell.y] = 2
        if cell == e:
            break
        for next_cell in get_neighbors:
            queue.append(next_cell)
            path[next_cell] = cell
            

    if cell == e:
        return sequence(e)
    else:
        return False



