# You must not modify the array(assume the array is read only).
# You must use only constant, O(1) extra space.
# Your runtime complexity should be less than O(n2).
# There is only one duplicate number in the array, but it could be repeated more than once.


# O(n) time | O(1) space
def findDuplicate(self, nums):
    if len(nums) < 2:
        return -1
    slow = nums[0]
    fast = nums[nums[0]]
    while slow != fast:
        slow = nums[slow]
        fast = nums[nums[fast]]
    fast = 0
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow
