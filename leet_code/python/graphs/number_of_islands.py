class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid or len(grid) < 1:
            return 0

        number_of_islands = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    number_of_islands += 1
                    self.sink(grid, i, j)

        return number_of_islands

    def sink(self, grid, i, j):
        if not((0 <= i < len(grid)) and (0 <= j < len(grid[0])) and grid[i][j] == '1'):
            return

        grid[i][j] = '0'

        for node in self.get_neighbors(grid, i, j):
            self.sink(grid, node[0], node[1])

    def get_neighbors(self, matrix, row, col):
        dr = [1, -1, 0, 0]
        dc = [0, 0, 1, -1]

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

            neighbors.append([r, c])

        return neighbors
