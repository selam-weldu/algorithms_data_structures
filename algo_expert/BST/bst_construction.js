// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let current = this;

        while (true) {
            // if(value === current.value) return undefined;
            if (value < current.value) { //go left
                if (!current.left) {
                    current.left = new BST(value);
                    break;
                }
                current = current.left;
            } else { // go right
                if (!current.right) {
                    current.right = new BST(value);
                    break;
                }
                current = current.right;
            }
        }
        return this;
    }

    contains(value) {
        // Write your code here.
        let current = this;
        while (current) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(value) {
        let current = this,
            parent = current;

        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else { //found node
                // if it has two children
                if (current.left && current.right) {
                    current.value = current.right.getMinValue();
                    current.right.remove(current.value);
                } else if (parent === current) { // if node is root
                    if (current.left) {
                        let leftChild = current.left;
                        current.value = leftChild.value;
                        current.left = leftChild.left;
                        current.right = leftChild.right;
                    } else if (current.right) {
                        let rightChild = current.right;
                        current.value = rightChild.value;
                        current.left = rightChild.left;
                        current.right = rightChild.right;
                    } else {
                        current.value = null;
                    }
                    //not the root node
                } else if (parent.left === current) { // you are left child
                    parent.left = current.left ? current.left : current.right;
                } else if (parent.right === current) { // you are right child
                    parent.right = current.right ? current.right : current.left;
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let current = this;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }
}