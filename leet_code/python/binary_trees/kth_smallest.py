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


def kthSmallest1(self, root, k):
    array = []
    self.traverse(root, array, k)
    return array[k-1].val

def traverse(self,node,array,k):
    if not node:
        return 
    
    self.traverse(node.left,array,k)
    array.append(node)
    if len(array) == k:
        return 
    self.traverse(node.right,array,k)
    
    return 
