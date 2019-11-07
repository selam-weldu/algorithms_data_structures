# O(n) time, O(n) space
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not len(nums):
            return 0
        prevPos, prevNeg = nums[:], nums[:]
        prevPos[0] = nums[0]
        prevNeg[0] = nums[0]
        ans = nums[0]

        for i in range(1, len(nums)):
            prevPos[i] = max(nums[i], prevPos[i-1] * nums[i], prevNeg[i-1]*nums[i])
            prevNeg[i] = min(nums[i], prevPos[i-1] * nums[i], prevNeg[i-1]*nums[i])

            ans = max(ans, prevPos[i])

        return ans

# O(n) time, O(1) space
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not len(nums):
            return 0
        prevPos = nums[0]
        prevNeg = nums[0]
        ans = nums[0]

        for i in range(1, len(nums)):
            pos = max(prevPos * nums[i], prevNeg * nums[i], nums[i])
            neg = min(prevPos * nums[i], prevNeg * nums[i], nums[i])
            prevPos = pos
            prevNeg = neg

            ans = max(ans, pos)

        return ans


