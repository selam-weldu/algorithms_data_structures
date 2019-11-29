def inorder_recursive(root, nodes = []):
    if not root: return nodes
    
    inorder_recursive(root.left)
    nodes.append(root.val)
    inorder_recursive(root.right)

    return nodes

#  public void inorderItr(Node root){
#         Deque<Node> stack = new LinkedList<Node>();
#         Node node = root;
#         while(true){
#             if(node != null){
#                 stack.addFirst(node);
#                 node = node.left;
#             }
#             else{
#                 if(stack.isEmpty()){
#                     break;
#                 }
#                 node = stack.pollFirst();
#                 System.out.println(node.data);
#                 node = node.right;
#             }
#         }
#     }

def inorder_iterative(root):
    stack = []
    nodes = []
    node = root

    while true:
        if node:
            stack.append(node)
            node = node.left
        else:
            if not stack: break

            node = stack.pop()
            nodes.append(node.val)
            node = node.right

    