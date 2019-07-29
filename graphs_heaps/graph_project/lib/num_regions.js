function numRegions(graph) {
    let visited = new Set()
    let keys = Object.keys(graph);

    let connected =[]

    keys.forEach(node => {
        if(!visited.has(node)){
            let tempConnected =[node]
            graph[node].forEach(neighbor => {
                tempConnected.push(neighbor)
                visited.add(neighbor)
            })
            visited.add(node)
            connected.push(tempConnected)
        } else{
            graph[node].forEach(neighbor => {
                connected[connected.length-1].push(neighbor)
                visited.add(neighbor)
            })
        }
    })

    return connected.length
}

module.exports = {
    numRegions
};


// function numRegions(graph) {
//  let connected = new Set;
//  let count = 0;
//  let keys = Object.keys(graph);

//  keys.forEach(key => {
//    if (!connected.has(key)) {
//      count += 1;
//      connected = new Set;
//    }

//    graph[key].forEach(node => {
//      connected.add(node)
//    })
//  })

//  return count;
// }