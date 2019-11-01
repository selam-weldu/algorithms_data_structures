// init queue and visited arr
// start of with the root in queue
// loop while queue is not empty
// shift from queue and push to visited
// add children of shifted value to the queue
// return visited

const BFS = function(node){
    let current = node,
        visited = [],
        queue = [current];

    while(queue.length){
        current = queue.shift()
        visited.push(current.value);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return visited;
}