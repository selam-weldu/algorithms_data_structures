var levelOrder = function (root) {
    if (!root) return [];

    let queue = [root],
        result = [],
        level,node,size;

    while (queue.length) {
        level = [];
        size = queue.length; // needs to be computed before for loop
        for (let i = 0; i < size; i++) {
            node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};