def kthSmallest(self, root, k):
    stack, node = [], root
    while True:
        while node:
            stack.append(node)
            node = node.left
        if not len(stack):
            break
        node = stack.pop()
        k -= 1
        if not k:
            return node.val
        node = node.right
