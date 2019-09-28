/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

const deleteNode = function(root, value){
    let current = root,
        parent = current;
    
    while(current){
        if(value < current.val){
            parent = current;
            current = current.left;
        }else if(value > current.val){
            parent = current;
            current = current.right;
        }else{
            if(current.left && current.right){
                current.val = getMinValue(current.right);
                deleteNode(current.right,current.val);
            }else if(parent === current){
                if(current.left){
                    let leftChild = current.left;
                    current.val = leftChild.val;
                    current.left = leftChild.left;
                    current.right = leftChild.right;
                }else if(current.right){
                    let rightChild = current.right;
                    current.left = rightChild.left;
                    current.right = rightChild.right;
                }else{
                    current.val = null;
                }
            }else if(parent.left === current){
                parent.left = current.left ? current.left : current.right;
            }else if(parent.right === current){
                parent.right = current.right ? current.right : current.left;
            }
            break;
        }
    }
    return root;
}

const getMinValue = function(node) {
    let current = node;
    while (current.left) {
        current = current.left;
    }
    return current.val;
}