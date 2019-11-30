# inorder l n r

# two cases if you have a right child or not
# if you have a right child, your sucessor is the left most
# node in your right subtree
# if you don't have a right child
# are you a left or right child?
# if you are a left child, your parent is your sucessor
# if you are a right child, your parent's parent is your sucessor
 
# O(h) time 
def find_successor(node):
    if node.right:
        node = node.right
        while node.left:
            node = node.left
        return node    

    while node.parent and node.parent.right is node:
        node = node.parent

    return node.parent