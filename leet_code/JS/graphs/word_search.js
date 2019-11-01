// O(n) space and time, n: number of cells
var exist = function(board, word) {
  let visited = board.map(row => row.map(el => false));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== word.charAt(0)) continue;
      if (search(row, col, 0, board, visited, word)) return true;
    }
  }

  return false;
};

const search = function(row, col, idx, board, visited, word) {
  if (idx == word.length) return true;
  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[0].length ||
    visited[row][col] ||
    board[row][col] != word.charAt(idx)
  )
    return false;

  visited[row][col] = true;

  let found =
    search(row + 1, col, idx + 1, board, visited, word) ||
    search(row - 1, col, idx + 1, board, visited, word) ||
    search(row, col + 1, idx + 1, board, visited, word) ||
    search(row, col - 1, idx + 1, board, visited, word);

  visited[row][col] = false;
  return found;
};



