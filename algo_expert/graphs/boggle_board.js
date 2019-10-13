// O(n * 8^s + ws) time
// O(n + ws) space
// n is total cells, s: length of longest word, w: number of words
function boggleBoard(board, words) {
  let trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }

  let finalWords = {};
  let visited = board.map(row => row.map(el => false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      explore(i, j, board, trie.root, visited, finalWords);
    }
  }

  return Object.keys(finalWords);
}

function explore(i, j, board, trieNode, visited, finalWords) {
  if (visited[i][j]) return;

  let letter = board[i][j];

  if (!trieNode.children[letter]) return;
  trieNode = trieNode.children[letter];
  visited[i][j] = true;

  if (trieNode.end) {
    finalWords[trieNode.data] = true;
  }

  let neighbors = getNeighbors(i, j, board);

  neighbors.forEach(neighbor => {
    explore(neighbor[0], neighbor[1], board, trieNode, visited, finalWords);
  });

  visited[i][j] = false;
}

function getNeighbors(i, j, board) {
  neighbors = [];

  if (i > 0) neighbors.push([i - 1, j]);
  if (j > 0) neighbors.push([i, j - 1]);
  if (i < board.length - 1) neighbors.push([i + 1, j]);
  if (j < board[0].length - 1) neighbors.push([i, j + 1]);
  if (i > 0 && j > 0) neighbors.push([i - 1, j - 1]);
  if (i < board.length - 1 && j < board[0].length - 1)
    neighbors.push([i + 1, j + 1]);
  if (i < board.length - 1 && j > 0) neighbors.push([i + 1, j - 1]);
  if (i > 0 && j < board[0].length - 1) neighbors.push([i - 1, j + 1]);

  return neighbors;
}

class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.end = false;
    this.data = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(str) {
    let node = this.root;

    for (let i = 0; i < str.length; i++) {
      if (!node.children[str[i]]) {
        node.children[str[i]] = new TrieNode(str[i]);
      }
      node = node.children[str[i]];
    }

    node.end = true;
    node.data = str;
    return this;
  }
}

