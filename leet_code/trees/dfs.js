// good for when working with bst
// all values will be added to the array in the right order
const inOrder = function (node) {
    let visited = [];
    function traverse(current){
        //left,self,right
        if(current.left) traverse(current.left);
        visited.push(current.value);
        if(current.right) traverse(current.right);
    }
    traverse(node);
    return visited;
}

// good for when cloning a tree
// maybe to store or recreate it
const preOrder = function(node){
    let visited = [];
    function traverse(current) {
        // self,left,right
        visited.push(current.value);
        if(current.left) traverse(current.left);
        if(current.right) traverse(current.right);
    }
    traverse(node);
    return visited;
}


const postOrder = function (node) {
    let visited = [];
    function traverse(current) {
        // left,right,self
        if(current.left) traverse(current.left);
        if(current.right) traverse(current.right);
        visited.push(current.value)
    }
    traverse(node);
    return visited;
}