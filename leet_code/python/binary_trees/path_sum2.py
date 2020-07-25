# O(n) time and space
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        result = []
        self.traverse(root,sum,[],result)
        return result
    
    
    def traverse(self,node,target,path,result):
        if not node:
            return result
        path.append(node.val)
        if not node.left and not node.right:
            if sum(path) == target:
                result.append(list(path))
                
        self.traverse(node.left,target,path,result)
        self.traverse(node.right,target,path,result)
        path.pop()