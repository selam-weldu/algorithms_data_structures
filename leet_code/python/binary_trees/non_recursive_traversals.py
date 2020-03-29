def inorder_recursive(root, nodes = []):
    if not root: return nodes
    
    inorder_recursive(root.left)
    nodes.append(root.val)
    inorder_recursive(root.right)

    return nodes


def inorder_iterative(root):
    stack = []
    nodes = []
    node = root

    while True:
        if node:
            stack.append(node)
            node = node.left
        else:
            if not stack: break

            node = stack.pop()
            nodes.append(node.val)
            node = node.right

    