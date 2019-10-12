var exist = function(board, word) {
  if (!board || !board[0]) return false;
  if (!word) return false;
  const m = board.length;
  const n = board[0].length;
  let r = false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, board, word, "", r);
      }
    }
  }

  return r;
};

const dfs = function(i, j, board, word, curWord, r) {
  curWord += board[i][j];
  if (curWord.length > word.length || r) return;
  if (curWord === word) r = true;

  const tmp = board[i][j];
  board[i][j] = "@";

  let neighbors = getNeighbors(i, j, board, word, curWord);

  for (let neighbor of neighbors) {
    dfs(neighbor[0], neighbor[1], board, word, curWord, r);
  }
  board[i][j] = tmp;
};

function getNeighbors(i, j, board, word, curWord) {
  let neighbors = [];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const m = board.length;
  const n = board[0].length;

  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];
    if (
      0 <= x &&
      x < m &&
      0 <= y &&
      y < n &&
      board[x][y] !== "@" &&
      board[x][y] === word[curWord.length]
    ) {
      neighbors.push([x, y]);
    }
  }

  return neighbors;
}



/////////////////////

var exist = function(board, word) {
  if (!board || !board[0]) return false;
  if (!word) return false;
  const m = board.length;
  const n = board[0].length;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let r = false;

  const dfs = (i, j, curWord) => {
    curWord += board[i][j];
    if (curWord.length > word.length || r) return;
    if (curWord === word) r = true;

    const tmp = board[i][j];
    board[i][j] = "@";
    for (let k = 0; k < 4; k++) {
      const x = i + dx[k];
      const y = j + dy[k];
      if (
        0 <= x &&
        x < m &&
        0 <= y &&
        y < n &&
        board[x][y] !== "@" &&
        board[x][y] === word[curWord.length]
      ) {
        dfs(x, y, curWord);
      }
    }
    board[i][j] = tmp;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, "");
      }
    }
  }

  return r;
};