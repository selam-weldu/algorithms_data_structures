
# O(n) time, O(h) space
def lca(root,node_one,node_two):
    if not root: return root
    if root.val == p.val or root.val == q.val: return root
    
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)
    
    if left and right:
        return root
    elif not left and not right:
        return None
    else:
        return left or right