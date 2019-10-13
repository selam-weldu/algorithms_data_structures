// 0(n) time , O(1) space

// two loops to iterate over grid 
// dfs on all values == 1
// check edge cases so row and col are within bounds
// change 1 into 0 so we don't revisit

var numIslands = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        count += traverse(i, j, grid);
      }
    }
  }

  return count;
};

function traverse(i, j, grid) {
  let stack = [[i, j]];
  let neighbors;

  while (stack.length) {
    [i, j] = stack.pop();

    if (grid[i][j] == 0) continue;
    grid[i][j] = 0;

    neighbors = getNeighbors(i, j, grid);

    neighbors.forEach(neighbor => {
      stack.push(neighbor);
    });
  }
  return 1;
}

function getNeighbors(i, j, matrix) {
  neighbors = [];

  if (i > 0) neighbors.push([i - 1, j]);
  if (j > 0) neighbors.push([i, j - 1]);
  if (i < matrix.length - 1) neighbors.push([i + 1, j]);
  if (j < matrix[0].length - 1) neighbors.push([i, j + 1]);

  return neighbors;
}
