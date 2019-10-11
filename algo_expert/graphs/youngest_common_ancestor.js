// get the depth of each descendant
// if they are not at equal depths, level them out
// backtrack until they are pointing at the same ancestor

// O(D) time D is depth of lower descendant
// O(1) space
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  if (!topAncestor) return topAncestor;

  let depthOne = getDepth(topAncestor, descendantOne);
  let depthTwo = getDepth(topAncestor, descendantTwo);

  if (depthOne > depthTwo) {
    descendantOne = backtrack(descendantOne, depthOne - depthTwo);
  } else if (depthOne < depthTwo) {
    descendantTwo = backtrack(descendantTwo, depthTwo - depthOne);
  }

  while (descendantOne !== descendantTwo) {
    descendantOne = descendantOne.ancestor;
    descendantTwo = descendantTwo.ancestor;
  }

  return descendantOne;
}

function getDepth(ancestor, descendant) {
  let depth = 0;
  while (descendant !== ancestor) {
    descendant = descendant.ancestor;
    ++depth;
  }
  return depth;
}

function backtrack(descendant, depth) {
  while (depth > 0) {
    descendant = descendant.ancestor;
    --depth;
  }
  return descendant;
}
