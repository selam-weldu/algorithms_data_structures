
# O(log n) time and space
class Solution(object):
    def search(self, nums, target):
        if not nums:
            return -1

        pivot = self.find_pivot(nums)

        if nums[pivot] == target:
            return pivot

        if pivot == 0:
            return self.binary_search(nums, target, 0, len(nums) - 1)
        elif nums[0] > target:
            return self.binary_search(nums, target, pivot + 1, len(nums) - 1)
        else:
            return self.binary_search(nums, target, 0, pivot - 1)

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

    def binary_search(self, arr, target, low, high):
        while(low <= high):

            mid = (low+high)//2

            if target < arr[mid]:
                high = mid-1
            elif target > arr[mid]:
                low = mid+1
            else:
                return mid

        return -1
