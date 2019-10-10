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
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "E");
g.addEdge("D", "B");
g.addEdge("D", "C");
g.addEdge("C", "E");
