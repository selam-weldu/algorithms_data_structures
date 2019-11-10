# O(n) time, O(1) space
class Solution:
    def rob(self, nums: List[int]) -> int:
        if not len(nums):
            return 0
        if len(nums) == 1:
            return nums[0]

        previous, current = nums[0], max(nums[0], nums[1])

        for i in range(2, len(nums)):
            newprevious = current
            current = max(current, nums[i] + previous)
            previous = newprevious
        return current

# O(n) time, O(n) space
class Solution:
    def rob(self, nums: List[int]) -> int:
        if not len(nums):
            return 0
        if len(nums) == 1:
            return nums[0]

        grab = nums[:]
        grab[1] = max(grab[1], grab[0])

        for i in range(2,len(nums)):
            grab[i] = max(grab[i - 1], nums[i] + grab[i - 2])
        return grab[-1]
