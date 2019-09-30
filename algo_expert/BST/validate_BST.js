// when we explore tree.right, that node's upperbound is the current node
// when we explore tree.left, that node's lowerbound is the current node

// Time O(n), space O(D), D is the longest depth
function validateBst(tree) {
    return helper(tree, -Infinity, Infinity);
}

function helper(tree, minValue, maxValue) {
    if (!tree) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;

    let leftSide = helper(tree.left, minValue, tree.value);
    let rightSide = helper(tree.right, tree.value, maxValue);

    return leftSide && rightSide;
}