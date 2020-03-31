import collections

# time and space: O(nm)
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        if not board or len(board) < 1:
            return board

        row, column = len(board), len(board[0])
        queue = collections.deque()

        for k in range(row):
            queue.append((k, 0))
            queue.append((k, column - 1))

        for k in range(column):
            queue.append((0, k))
            queue.append((row - 1, k))

        while queue:
            x, y = queue.popleft()

            if ((0 <= x < row) and (0 <= y < column) and board[x][y] == 'O'):
                board[x][y] = 'T'
                queue.extend([(x-1, y), (x+1, y), (x, y+1), (x, y-1)])

        for i in range(row):
            for j in range(column):
                if board[i][j] == 'T':
                    board[i][j] = 'O'
                else:
                    board[i][j] = 'X'
