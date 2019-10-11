// 0(n) time , O(1) space

// two loops to iterate over grid 
// dfs on all values == 1
// check edge cases so row and col are within bounds
// change 1 into 0 so we don't revisit
const numIslands = function(grid) {
  let numIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 0) continue;
      numIslands += traverse(row, col, grid);
    }
  }

  return numIslands;
};

const traverse = function(row, col, grid) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] == 0
  ) {
    return 0;
  }

  grid[row][col] = 0;

  traverse(row - 1, col, grid);
  traverse(row + 1, col, grid);
  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);

  return 1;
};
