# O(n) time, building hash and recursive construction
# O(n) space, call stack plus hash map 
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder: return None
        if len(preorder) != len(inorder): return None
        
        node_inorder_idx = {node: idx for idx, node in enumerate(inorder)}
        
        return self.helper(0,len(inorder),node_inorder_idx,preorder)
    
    def helper(self,left,right,node_inorder_idx,preorder):
        if right == left: return None
        
        root_node = preorder.pop(0)
        index = node_inorder_idx[root_node]
        
        root = TreeNode(root_node)
        root.left = self.helper(left, index, node_inorder_idx, preorder)
        root.right = self.helper(index + 1, right, node_inorder_idx, preorder)
        
        return root