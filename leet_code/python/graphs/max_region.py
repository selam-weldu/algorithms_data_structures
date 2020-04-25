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

    result += count(grid,i+1,j+1)
    result += count(grid,i,j+1)
    result += count(grid,i+1,j)
    result += count(grid,i-1,j-1)
    result += count(grid,i,j-1)
    result += count(grid,i-1,j)
    result += count(grid,i-1,j+1)
    result += count(grid,i+1,j-1)

    return result

    # return 1 + (count(grid, i+1, j+1) + count(grid, i, j+1) + count(grid, i+1, j) + count(grid, i-1, j-1) + count(grid, i, j-1) + count(grid, i-1, j) + count(grid, i-1, j+1) + count(grid, i+1, j-1))
