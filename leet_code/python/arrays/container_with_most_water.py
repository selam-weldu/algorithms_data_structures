# O(n) time, O(1) space
class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxArea = float("-inf")

        i, j = 0, len(height) - 1

        while i < j:
            length = min(height[i], height[j])
            width = j - i
            maxArea = max(maxArea, length * width)

            if height[i] > height[j]:
                j -= 1
            else:
                i += 1
        return maxArea
