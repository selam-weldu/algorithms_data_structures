// O(n) time, O(1) space
function riverSizes(matrix) {
  let sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        traverse(i, j, matrix, sizes);
      }
    }
  }

  return sizes;
}

function traverse(i, j, matrix, sizes) {
  let riverSize = 0;
  let stack = [[i, j]];
  let neighbors;

  while (stack.length) {
    [i, j] = stack.pop();

    if (matrix[i][j] === 0) continue;
    matrix[i][j] = 0;

    ++riverSize;

    neighbors = getNeighbors(i, j, matrix);

    neighbors.forEach(neighbor => {
      stack.push(neighbor);
    });
  }

  if (riverSize) sizes.push(riverSize);
}

function getNeighbors(i, j, matrix) {
  neighbors = [];

  if (i > 0) neighbors.push([i - 1, j]);
  if (j > 0) neighbors.push([i, j - 1]);
  if (i < matrix.length - 1) neighbors.push([i + 1, j]);
  if (j < matrix[0].length - 1) neighbors.push([i, j + 1]);

  return neighbors;
}



// using an auxilary matrix to keep track of visited cells

// O(n) time and space
function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map(row => row.map(el => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        traverse(i, j, matrix, sizes, visited);
      }
    }
  }

  return sizes;
}

function traverse(i, j, matrix, sizes, visited) {
  let riverSize = 0;
  let stack = [[i, j]];
  let neighbors;

  while (stack.length) {
    [i, j] = stack.pop();

    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;

    ++riverSize;

    neighbors = getNeighbors(i, j, matrix);

    neighbors.forEach(neighbor => {
      stack.push(neighbor);
    });
  }

  if (riverSize) sizes.push(riverSize);
}

function getNeighbors(i, j, matrix) {
  neighbors = [];

  if (i > 0) neighbors.push([i - 1, j]);
  if (j > 0) neighbors.push([i, j - 1]);
  if (i < matrix.length - 1) neighbors.push([i + 1, j]);
  if (j < matrix[0].length - 1) neighbors.push([i, j + 1]);

  return neighbors;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
