// preorder[0] is the root node
// left side of tree is everything to the left of preorder[0] in the inorder array
// right side of tree is everything to the right of preorder[0]

// O(n) time, O(n) space
var buildTree = function (preorder, inorder) {
    if (!inorder.length || !preorder.length) return null;

    let node = new TreeNode(preorder[0]);

    if (inorder.length === 1) return node; 

    let arr = divideArray(inorder, node.val),
        left = arr[0],
        right = arr[1];

    //when passing preorder, only need to make sure preorder[0]
    // is the correct element. 
    node.left = buildTree(preorder.slice(1), left); 
    node.right = buildTree(preorder.slice(1 + left.length), right);

    return node;
};

var divideArray = function (array, value) {
    let left = [],
        right = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            left = array.slice(0, i);
            right = array.slice(i + 1);
            break;
        }
    }

    return [left, right];
}