// Time: O(n), Space: O(D)

const maxDepth = function (root) {
    if (!root) return 0; // optimization
    return helper(root, 0);
};

function helper(root, depth) {
    if (!root) return depth;

    depth += 1;
    let left = helper(root.left, depth);
    let right = helper(root.right, depth);

    return Math.max(left, right);
}