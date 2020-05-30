# O(n) time | O(1) space
def moveZeroes(self, nums: List[int]) -> None:
        if not len(nums):
            return nums

        non_zero = i = 0
        while i < len(nums):
            if nums[i] != 0:
                nums[i], nums[non_zero] = nums[non_zero], nums[i]
                non_zero += 1
            i += 1
        return nums
