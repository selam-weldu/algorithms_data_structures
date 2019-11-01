// Time: O(n), Space: O(1)
function invertTree(root) {
    if (!root) return root;

    let node = root,
        stack = [node];

    while (stack.length) {
        node = stack.pop();

        if (!node) continue;

        [node.left, node.right] = [node.right, node.left];

        stack.push(node.left, node.right);
    }
    return root;
}

////
// Recursive 
// Time: O(n), Space: O(n)
const invertTree = function (root) {
    if (!root) return null;

    const invert = (root) => {
        if (!root) return;

        [root.left, root.right] = [root.right, root.left];

        invert(root.left);
        invert(root.right);
    }

    invert(root);

    return root
};




