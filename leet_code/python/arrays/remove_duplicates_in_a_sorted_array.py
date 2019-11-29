# O(n) time, O(1) space
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums: return 0
        
        swap = 1
        
        for i in range(len(nums) - 1):
            if nums[i] != nums[i+1]:
                nums[swap] = nums[i + 1]
                swap += 1
        
        return swap