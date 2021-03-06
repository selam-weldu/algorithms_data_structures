// if lCA is bigger than both p and q so we move left
// if lCA is smaller than both p and q so we move right
// if it doesn't meet both checks return that node

// O(h)
var lowestCommonAncestor = (root, p, q) => {

    if (root === p || root === q || root === null) return root;

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};