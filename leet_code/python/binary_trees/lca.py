
# O(h) time, O(h) space
def lca(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lca(root.left, p, q)
    elif p.val > root.val and q.val > root.val:
        return lca(root.right, p, q)
    else:
        return root

# O(h) time | O(1) space
def lca1(self, root, p, q):
    while root:
        if max(p.val, q.val) < root.val:  
            root = root.left
        elif min(p.val, q.val) > root.val:  
            root = root.right
        else:
            return root

# O(n) time | O(h) space
def lca2(self, root, p, q):
    if not root:
        return None
    if root == p or root == q:
        return root

    left = self.lca2(root.left,p,q)
    right = self.lca2(root.right,p,q)

    if left and right:
        return root
    else:
        return left or right
