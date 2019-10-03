// traverse both trees at the sametime
// check if values are equal at each point, if both are null return true

// Time: O(n), Space: O(h) h is the height of the tree 
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};