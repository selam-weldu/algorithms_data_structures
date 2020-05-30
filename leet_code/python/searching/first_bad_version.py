# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

# O(log n) time | O(1) space

def firstBadVersion(self, n):
    bad_version = None
    low = 0
    high = n
    while low <= high:
        mid = low + (high-low) // 2
        if isBadVersion(mid):
            bad_version = mid
            high = mid - 1
        else:
            low = mid + 1
    return bad_version
