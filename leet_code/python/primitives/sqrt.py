# O(log n) time | O(1) space
def mySqrt(self, x: int) -> int:
    left, right = 0, x // 2
    while left <= right:
        mid = left + (right - left) // 2
        if mid ** 2 == x:
            return mid
        if mid ** 2 < x:
            left = mid + 1
        else:
            right = mid
    return right
