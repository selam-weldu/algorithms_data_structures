# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

# Constraints:

# 3 <= mountain_arr.length() <= 10000
# 0 <= target <= 10 ^ 9
# 0 <= mountain_arr.get(index) <= 10 ^ 9

# O(logn) time and space
class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        if not mountain_arr:
            return -1

        if mountain_arr.length() == 1:
            return 0

        peak = self.findPeak(mountain_arr, target)
        if mountain_arr.get(peak) == target:
            return peak

        firstIdx = self.binary(mountain_arr, target, 0, peak-1)
        if firstIdx != -1:
            return firstIdx

        secondIdx = self.binaryRev(
            mountain_arr, target, peak+1, mountain_arr.length()-1)
        return secondIdx

    def findPeak(self, array, target):

        start, end = 1, array.length() - 2
        while start <= end:
            mid = (start + end) // 2
            mid_ele = array.get(mid)
            if array.get(mid-1) <= mid_ele and mid_ele >= array.get(mid+1):
                return mid
            elif array.get(mid - 1) > mid_ele:
                end = mid - 1
            else:
                start = mid + 1

        if array.get(0) > array.get(1):
            return 0
        if array.get(-1) > array.get(-2):
            return -1

    def binary(self, array, target, start, end):
        while start <= end:
            mid = (start + end) // 2
            mid_ele = array.get(mid)
            if mid_ele == target:
                return mid
            elif mid_ele > target:
                end = mid - 1
            else:
                start = mid + 1
        return -1

    def binaryRev(self, array, target, start, end):
        while start <= end:
            mid = (start + end) // 2
            mid_ele = array.get(mid)
            if mid_ele == target:
                return mid
            elif mid_ele > target:
                start = mid + 1
            else:
                end = mid - 1
        return -1
