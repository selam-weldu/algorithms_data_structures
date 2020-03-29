class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if len(grid) <= 0:
            return 0

        num_of_islands = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if (grid[i][j] == '1'):
                    num_of_islands += 1
                    self.sink(grid, i, j)

        return num_of_islands

    def sink(self, grid, i, j):
        if (i >= 0 and i < len(grid) and j >= 0 and j < len(grid[0]) and grid[i][j] == '1'):
            grid[i][j] = '0'

            self.sink(grid, i + 1, j)
            self.sink(grid, i - 1, j)
            self.sink(grid, i, j + 1)
            self.sink(grid, i, j - 1)
