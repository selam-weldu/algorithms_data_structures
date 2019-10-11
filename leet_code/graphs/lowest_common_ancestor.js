// if left and right each contain the searched nodes it means the root is the parent
// else which ever node is not null contains the result;

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left ? left : right;
};
