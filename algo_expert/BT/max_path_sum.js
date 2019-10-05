// O(n) time, O(log(n)) space

function maxPathSum(tree){
    const [_, maxSum] = [...findMaxSum(tree)];
    return maxSum;
}

function findMaxSum(tree){
    if(!tree) return [0,0];

    const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
    const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

    const value = tree.value;
    // const {value} = tree;
    const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
    const maxSumAsRootNode = Math.max(
        leftMaxSumAsBranch + value + rightMaxSumAsBranch,
        maxSumAsBranch
    );
    const maxPathSum = Math.max(
        leftMaxPathSum,
        rightMaxPathSum,
        maxSumAsRootNode
    );

    return [maxSumAsBranch, maxPathSum];
}



////////

// Two situation to consider to calculate max sum:
// 1 Include root in the path, there are 3 possibilities:

// only root 2) root + single path start with root.left 3) root + single path start with root.right.
// Single path contains at least one node, which is the stating node. 
// So if include root in the path, the max value will be:
// Math.max(singlePath start with root.left, 0) + Math.max(singlePath start with root.right, 0) + root.val
// 2 Not include root in the path, there are 2 possibilities:
// max value on the root.left
// max value on the root.right

// The result is the max value of the above possibilities. 
// Since we need to calculate the max value based on subtree's single path 
// and max value, so we return these two value in the recursion function.

var maxPathSum = function (root) {
    var [max, maxSingle] = helper(root);
    return max;
};


var helper = function (root) {
    if (root == null) return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    var [lmax, lmaxSingle] = helper(root.left);
    var [rmax, rmaxSingle] = helper(root.right);
    maxSingle = Math.max(0, Math.max(lmaxSingle, rmaxSingle)) + root.val;  //only one side
    max = Math.max(lmax, rmax, Math.max(lmaxSingle, 0) + Math.max(rmaxSingle, 0) + root.val);
    return [max, maxSingle];
}