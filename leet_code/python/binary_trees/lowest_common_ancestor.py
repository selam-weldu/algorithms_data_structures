
# O(n) time, O(h) space
def lca(root,node_one,node_two):
    if not root: return root
    if root.val == p.val or root.val == q.val: return root
    
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    
    if left and right:
        return root
    elif not left and not right:
        return None
    else:
        return left or right