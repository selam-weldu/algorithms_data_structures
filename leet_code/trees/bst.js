class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

// if bst is empty, set newNode to be the root
// else, check if value <,>,= to the current node
// if less, check if there is a current.left, if yes
// set that to be the current node, else add newNode 
// as current's left child.
// same for values greater than current
// handling === case is a design choice

    // average + best: time O(logn), space O(1)
    // worst: time O(n), space O(1) ... lopsided bst
    insert(value){
        // if value is already in tree I won't add it, another option
        // can be keeping a frequency property for each node and increamenting
        // the value for every repeat

        let newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){ //go left
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{ // go right
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // average + best: time O(logn), space O(1)
    // worst: time O(n), space O(1) ... lopsided bst
    contains(value){
        let current = this.root;

        while(current){
            if(value === current.value){
                return true;
            }else if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    remove(value, parentNode = null) {
        let current = this;

        while (current) {
            if (value < current.value && current.left) {
                parentNode = current;
                current = current.left;
            } else if (value > current.value && current.right) {
                parentNode = current;
                current = current.right;
            } else {
                break;
            }
        }

        if (!current.left && !current.right) {
            // let minNode = current.right.getMinValue();

            current.value = current.right.getMinValue();
            // minNode = null;
            current.right.remove(current.value, current);
            return this;
        }

        if (!parentNode) {//root node
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
        } else {
            if (parentNode.left === current) {
                if (current.left) {
                    parentNode.left = current.left;
                } else {
                    parentNode.left = current.right;
                }
            } else if (parentNode.right === current) {
                if (current.right) {
                    parentNode.right = current.right;
                } else {
                    parentNode.right = current.left;
                }
            } else {
                current.value = null;
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