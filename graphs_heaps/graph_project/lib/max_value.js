function maxValue(node, visited=new Set()) {
    
    if(visited.has(node.val)) return;
    let max = node.val 
    visited.add(node.val)

    node.neighbors.forEach(neighbor => {
        nextVal = maxValue(neighbor,visited);
        if(max < nextVal) max = nextVal;
    })

    return max
}

module.exports = {
    maxValue
};