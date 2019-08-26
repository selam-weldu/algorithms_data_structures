class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // Time: O(n)
    depthFirstSearch(array) {
        // Write your code here.
        let stack = [this]

        while (stack.length > 0) {
            let node = stack.pop()
            array.push(node.name)

            for (let i = node.children.length - 1; i > 0; i--) {
                stack.push(node.children[i])
            }
        }

        return array
    }
}