# O(n) time and space
def buildTree(inorder,postorder):
    if not inorder or not postorder: return None
    if len(inorder) != len(postorder): return None

    node_to_idx = {node: idx for idx, node in enumerate(inorder)}

    return self.helper(0,len(inorder),node_to_idx,postorder):

def helper(self, left, right, node_to_idx, postorder):
    if left == right: return None

    root_node = postorder.pop()
    index = node_to_index[root_node]

    root = TreeNode(root_node)
    root.right = helper(index + 1, right, node_to_index, postorder)
    root.left = helper(left, index, node_to_index, postorder)

    return root