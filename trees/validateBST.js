function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
    // leaf nodes are valid
    if (!tree) return true;
    //minValue < tree.value <= maxValue for a valid BST
    if (tree.value < minValue || tree.value >= maxValue) return false;

    //current node is the upper bound for the left sub-tree
    let leftValid = validateBstHelper(tree.left, minValue, tree.value);
    //current node is the lower bound for the right sub-tree
    let rightValid = validateBstHelper(tree.right, tree.value, maxValue);

    return leftValid && rightValid;
}