// O(n) time, O(H) space
var kthSmallest = function (node, k) {
    let arr = [];

    function inorder(root) {
        if (!root) return arr;
        if (root.left) inorder(root.left);
        arr.push(root.val);
        if (root.right) inorder(root.right);
    }

    inorder(node);

    return arr[k - 1];
};