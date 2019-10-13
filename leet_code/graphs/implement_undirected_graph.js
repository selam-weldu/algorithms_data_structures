class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => {
      return v !== vertex2;
    });

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => {
      return v !== vertex1;
    });
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(v => {
      this.removeEdge(vertex, v);
    });

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function traverse(vertex) {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return traverse(neighbor);
        }
      });
    }

    traverse(start);

    return result;
  }

  depthFirstIterative(start){
      let result = [];
      let visited = {};
      let stack = [start];
      let vertex;

      visited[start] = true;

      while(stack.length){
        vertex = stack.pop();

        result.push(vertex);

        this.adjacencyList[vertex].forEach(neighbor => {
          if(!visited[neighbor]){
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        })
      }
    return result;  
  }

  breadthFirst(start){
      let result = [];
      let visited = {};
      let queue = [start];
      let vertex;

      while(queue.length){
        vertex = queue.shift();

        if(!visited[vertex]){
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                queue.push(neighbor);
            });
        }
      }

      return result;
  }
}





let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.depthFirstIterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.breadthFirst("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//
