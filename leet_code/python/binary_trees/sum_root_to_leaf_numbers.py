# O(n) time, O(h) space
class Solution:
    def sumNumbers(self, root):
        return self.sumHelper(root, current_sum = 0)
    
    
    def sumHelper(self,node, current_sum):
        if not node: return 0
        
        current_sum = current_sum * 10 + node.val
        
        if not node.left and not node.right:
            return current_sum
        
        left_sum = self.sumHelper(node.left, current_sum)
        right_sum = self.sumHelper(node.right, current_sum)
        
        return left_sum + right_sum