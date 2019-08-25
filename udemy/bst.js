class Node {
    constructor(value) {

        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {

        this.root = null
    }

    // O(log n) average-case
    // O(n) worst-case | one sided tree
    insert(value) {

        let node = new Node(value);


        if (this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node
                    return this
                } else {
                    current = current.left
                }
            } else if (value >= current.value) {
                if (current.right === null) {
                    current.right = node
                    return this
                } else {
                    current = current.right
                }
            }
        }

    }

    // O(log n) average-case
    // O(n) worst-case | one sided tree
    contains(value) {
        if (this.root === null) return false
        let current = this.root
        while (current !== null) {
            if (value === current.value) {
                return true
            } else if (value < current.value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }

    BFS() {
        let current = this.root,
            queue = [current],
            visited = [];


        while (queue.length) {
            current = queue.shift()
            visited.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        return visited
    }

    DFSPreOrder() {
        let current = this.root,
            stack = [current],
            visited = []

        while (stack.length) {
            current = stack.pop()
            visited.push(current.value)
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)

        }
        return visited
    }

    DFSPostOrder() {
        let visited = []

        function traverse(current) {
            if (current.left) traverse(current.left)
            if (current.right) traverse(current.right)
            visited.push(current.value)
        }

        traverse(this.root)

        return visited
    }
}

//     10
//  6     15  
//3  8  11  20

let tree = new BST();

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.insert(11)

console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())