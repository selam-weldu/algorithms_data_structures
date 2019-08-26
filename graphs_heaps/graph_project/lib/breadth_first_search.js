function breadthFirstSearch(startingNode, targetVal) {
    
    let visited = new Set();
    let queue = [startingNode]

    while(queue.length !== 0){
        current = queue.shift()
        visited.add(current)
        if(current.val === targetVal){
            return current
        } else {
            current.neighbors.forEach(neighbor => {
                if(!visited.has(neighbor)){
                    queue.push(neighbor)
                }
            })
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};