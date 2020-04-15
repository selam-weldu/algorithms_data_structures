# O(logn) time | O(1) space
class Solution:
    def findPeakElement(self, nums):
        if not nums or len(nums) == 0:
            return -1

        if len(nums) == 1:
            return 0

        start, end = 1, len(nums) - 2

        while start <= end:
            mid_idx = (start + end) // 2
            mid_ele = nums[mid_idx]

            if nums[mid_idx - 1] <= mid_ele and mid_ele >= nums[mid_idx + 1]:
                return mid_idx
            elif nums[mid_idx - 1] > mid_ele:
                end = mid_idx - 1
            else:
                start = mid_idx + 1

        if nums[0] > nums[1]:
            return 0
        if nums[-1] > nums[-2]:
            return len(nums) - 1
