// traverse both trees at the sametime
// check if values are equal at each point, if both are null return true

// Time: O(n), Space: O(h) h is the height of the tree 
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

// Time: O(n), space:O(1)

var isSameTree = function (p, q) {
    if (!p && !q) return true;

    let node1 = p,
        node2 = q,
        stack1 = [node1],
        stack2 = [node2];

    while (stack1.length && stack2.length) {
        node1 = stack1.pop();
        node2 = stack2.pop();

        if (!node1 && !node2) continue;

        if ((!node1 && node2) || (node1 && !node2)) return false;

        if (node1.val !== node2.val) return false;

        stack1.push(node1.left, node1.right);
        stack2.push(node2.left, node2.right);

        //might not need this, not sure
        if (stack1.length !== stack2.length) return false;
    }

    return true;

};