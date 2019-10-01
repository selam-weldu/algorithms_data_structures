function invertBinaryTree(tree) {
    if (!tree) return;

    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}