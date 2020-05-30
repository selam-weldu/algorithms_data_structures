# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

# O(log n) time | O(1) space
class Solution:
    def firstBadVersion(self, n):
        return self.check_version(0, n)

    def check_version(self, low, high):
        bad_version = None

        while low <= high:
            mid = (low + high) // 2
            if isBadVersion(mid):
                bad_version = mid
                high = mid - 1
            else:
                low = mid + 1
        return bad_version
