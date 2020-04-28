def maxRegion(grid):
    if not grid or len(grid) == 0:
        return 0

    max_count = 0

    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if grid[row][col] == 1:
                max_count = max(max_count, count(grid, row, col))

    return max_count


def count(grid, i, j):
    if (i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == 0):
        return 0

    grid[i][j] = 0
    result = 1

    for node in get_neighbors(grid, i, j):
        result += count(grid, node[0], node[1])

    return result


def get_neighbors(matrix, row, col):
    dr = [1, -1, 0, 0, 1, -1, 1, -1]
    dc = [0, 0, 1, -1, -1, 1, 1, -1]

    neighbors = []

    for i in range(len(dr)):
        r = row + dr[i]
        c = col + dc[i]

        if r < 0 or c < 0:
            continue
        if r >= len(matrix) or c >= len(matrix[0]):
            continue
        if matrix[r][c] == 0:
            continue

        neighbors.append((r, c))

    return neighbors
