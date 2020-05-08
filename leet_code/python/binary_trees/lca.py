
# O(h) time, O(h) space
def lca(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lca(root.left, p, q)
    elif p.val > root.val and q.val > root.val:
        return lca(root.right, p, q)
    else:
        return root
