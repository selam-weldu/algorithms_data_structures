// O(n) time, n is number of nodes in matrix
// O(1) space

function riverSizes(matrix) {
  let sizes = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) continue;
      traverse(row, col, matrix, sizes);
    }
  }

  return sizes;
}

function traverse(i, j, matrix, sizes) {
  let riverSize = 0;
  let stack = [[i, j]];
  let currentNode, unvisitedNeighbors;

  while (stack.length) {
    currentNode = stack.pop();
    i = currentNode[0];
    j = currentNode[1];

    if (matrix[i][j] === 0) continue;
    matrix[i][j] = 0;

    ++riverSize;
    unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix);

    unvisitedNeighbors.forEach(neighbor => {
      stack.push(neighbor);
    });
  }

  if (riverSize > 0) sizes.push(riverSize);
}

function getUnvisitedNeighbors(i, j, matrix) {
  unvisitedNeighbors = [];

  if (i > 0) unvisitedNeighbors.push([i - 1, j]);
  if (j > 0) unvisitedNeighbors.push([i, j - 1]);
  if (i < matrix.length - 1) unvisitedNeighbors.push([i + 1, j]);
  if (j < matrix[0].length - 1) unvisitedNeighbors.push([i, j + 1]);

  return unvisitedNeighbors;
}


