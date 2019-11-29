# O(h) time, O(1) space
def lca(node_one, node_two):
    def get_depth(node):
        depth = 0
        while node:
            node = node.parent
            depth -= 1
        return depth

    depth_one, depth_two = get_depth(node_one), get_depth(node_two)

    if depth_two > depth_one:
        node_one, node_two = node_two, node_one

    depth_diff = abs(depth_one - depth_two)
    while depth_diff:
        node_one = node_one.parent
        depth_diff -= 1

    while node_one != node_two:
        node_one, node_two = node_one.parent, node_two.parent

    return node_one