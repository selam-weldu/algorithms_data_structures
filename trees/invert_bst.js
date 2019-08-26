function invertBinaryTree(tree) {
    
    let current = tree
    let queue = [current]

    while (queue.length) {
        current = queue.shift()
        if (current) {
            swap(current, current.left, current.right)
            queue.push(current.left)
            queue.push(current.right)
        }
    }
    return this
}

function swap(tree, left, right) {
    let temp = left
    tree.left = right;
    tree.right = temp;
}