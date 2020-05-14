# O(mn4 ^ len(word)) time | O(mn + len(word)) space
class Solution:
    def exist(self, board, word):
        visited = [[False for col in row] for row in board]

        for row in range(len(board)):
            for col in range(len(board[0])):
                if(word[0] == board[row][col]):
                    if self.search(row, col, board, 0, word, visited):
                        return True
        return False

    def search(self, i, j, board, idx, word, visited):
        if visited[i][j] or (word[idx] != board[i][j]):
            return False
        visited[i][j] = True

        idx += 1
        if(idx == len(word)):
            return True

        neighbors = self.getNeighbors(i, j, board, visited)
        for neighbor in neighbors:
            if self.search(neighbor[0], neighbor[1], board, idx, word, visited):
                return True

        visited[i][j] = False

    def getNeighbors(self, row, col, matrix, visited):
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
            if visited[r][c]:
                continue

            neighbors.append((r, c))

        return neighbors
