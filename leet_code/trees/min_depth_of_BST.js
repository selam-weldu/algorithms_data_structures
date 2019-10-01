// if leaf node return 1
// if !node.left, recur node.right and vice verse
// if node.left && node.right return the min of both sides
// DFS, version 1
const minDepth = function (root) {

    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    if (!root.left && root.right) {
        return 1 + minDepth(root.right);
    } else if (!root.right && root.left) {
        return 1 + minDepth(root.left)
    } else {
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    }

};

///////// version 1 cleaned up
const minDepth = function (root) {
    if (!root) return 0;

    if (!root.left && !root.right) {
        return 1;
    }
    if (!root.left) {
        return 1 + minDepth(root.right);
    }
    if (!root.right) {
        return 1 + minDepth(root.left)
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));

};

////////

const minDepth = function (root) {
    if (!root) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    return 1 + (Math.min(left, right) || Math.max(left, right))
};


//////

var minDepth = function (root) {
    if (!root) return 0;

    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if (left === 0 && right !== 0 || left !== 0 && right === 0) {
        return Math.max(left, right) + 1;
    }

    return Math.min(left, right) + 1;
};

//////// BFS

var minDepth = function (root) {
    if (!root) return 0;
    let depth = 1;
    let queue = [root];
    if (!root.left && !root.right) return depth;

    while (queue.length > 0) {
        let queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            let node = queue.shift();

            if (!node.left && !node.right) return depth;
            else {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        depth++;
    }

    return depth;
};

