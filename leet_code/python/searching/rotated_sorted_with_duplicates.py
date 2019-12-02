# O(logn) best case, O(n) worst case
class Solution:
    def search(self, nums, target):
        if not nums:
            return False
        start, end = 0, len(nums) - 1
        return self._search(nums, target, start, end)
    
    def _search(self, nums, target, start, end):
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                return True
            temp_start = start
            temp_end = end
            if nums[mid] > nums[start] or nums[mid] > nums[end]:
                if nums[start] <= target <= nums[mid]:
                    end = mid - 1
                else:
                    start = mid + 1
            elif nums[mid] < nums[start] or nums[mid] < nums[end]:
                if nums[mid] <= target <= nums[end]:
                    start = mid + 1
                else:
                    end = mid - 1
            if self._search(nums, target, start + 1, mid- 1):
                return True
            if self._search(nums, target, mid + 1, end - 1):
                return True
            if temp_start == start and temp_end == end:
                return False
        return False

    