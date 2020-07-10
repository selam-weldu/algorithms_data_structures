def sum_of_leaves(tree):
    total_sum = 0
    def traverse(node):
        if not node:
            return 0
        if not node.left and not node.right:
            return node.value
        
        total_sum += traverse(node.left)
        total_sum += traverse(node.right)

    traverse(tree)
    return total_sum
    