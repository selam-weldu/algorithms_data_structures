function inOrderTraverse(tree, array) {
    if (tree) {
        if (tree.left) inOrderTraverse(tree.left, array)
        array.push(tree.value)
        if (tree.right) inOrderTraverse(tree.right, array)
    }
    return array
}

function preOrderTraverse(tree, array) {
    if (tree) {
        array.push(tree.value)
        if (tree.left) preOrderTraverse(tree.left, array)
        if (tree.right) preOrderTraverse(tree.right, array)
    }
    return array
}

function postOrderTraverse(tree, array) {
    if (tree) {
        if (tree.left) postOrderTraverse(tree.left, array)
        if (tree.right) postOrderTraverse(tree.right, array)
        array.push(tree.value)
    }
    return array
}