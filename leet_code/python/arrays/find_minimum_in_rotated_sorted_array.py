# O(log n) time
class Solution:
    def findMin(self, nums: List[int]) -> int:
        if not nums or len(nums) == 0:
            return -1

        pivot = self.find_pivot(nums)

        if pivot == 0:
            return nums[0]
        else:
            return nums[pivot]

    def find_pivot(self, arr):
        if not arr or len(arr) == 0:
            return -1

        if arr[0] <= arr[-1]:
            return 0

        start, end = 0, len(arr) - 1

        while(start <= end):
            mid = (start + end) // 2

            if arr[mid] > arr[mid + 1]:
                return mid + 1
            elif arr[start] <= arr[mid]:
                start = mid + 1
            else:
                end = mid - 1
        return 0
