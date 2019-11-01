# O(n) time and space
class Solution:
    def twoSum(self, nums, target):
        nums_map = {}

        for idx in range(len(nums)):
            num = nums[idx]
            match = target - num
            if match in nums_map:
                return [idx, nums_map[match]]
            else:
                nums_map[num] = idx

        return [-1, -1]
