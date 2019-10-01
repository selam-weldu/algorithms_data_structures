// Time: O(n), Space: O(D)
// Divide and conquer

////version 1
// const maxDepth = function (root) {
//     if (!root) return 0; // optimization
//     return helper(root, 0);
// };

// function helper(root, depth) {
//     if (!root) return depth;

//     depth += 1;
//     let left = helper(root.left, depth);
//     let right = helper(root.right, depth);

//     return Math.max(left, right);
// }


////////// version 2

const maxDepth = function (root) {
    if (!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left, right);

};

////////
// short 'n sweet

const maxDepth = function (root) {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

/////
// if we are counting edges not nodes

const maxDepth = function(root){
    if(!root) return -1;

    if(!root.left && !root.right){
        return 0;
    }else{
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}