var cloneGraph = function(node) {
  let clonedGraph = {};

  function traverse(node) {
    if (!node) return node;
    if (!clonedGraph[node.val]) {
      clonedGraph[node.val] = new Node(node.val);
      clonedGraph[node.val].neighbors = node.neighbors.map(neighbor =>
        traverse(neighbor)
      );
    }
    return clonedGraph[node.val];
  }

  return traverse(node);
};
