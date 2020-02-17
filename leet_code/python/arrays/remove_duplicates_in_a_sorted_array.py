# O(n) time, O(1) space
class Solution:
    def removeDuplicates(self, nums):
        if not nums: return 0
        
        swap_idx = 1
        
        for i in range(len(nums) - 1):
            if nums[i] != nums[i+1]:
                nums[swap_idx] = nums[i + 1]
                swap_idx += 1
        
        return swap_idx