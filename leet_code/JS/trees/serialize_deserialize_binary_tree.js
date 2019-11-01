var serialize = function (root) {

    if (!root) return "null,";
    let left = serialize(root.left),
        right = serialize(root.right);

    return root.val + "," + left + right;

};


var deserialize = function (data) {
    let queue = data.split(",");

    function helper() {
        let value = queue.shift();

        if (value === "null") return null; //base case

        let node = new TreeNode(value);

        node.left = helper();
        node.right = helper();

        return node;
    }

    return helper();
};