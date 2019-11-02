# O(n) time
# O(min(u)) space, u: len(unique char in string)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 1:
            return 0

        start_idx = 0
        longest = [0, 1]
        seen = {}

        for i, char in enumerate(s):
            if char in seen:
                start_idx = max(start_idx, seen[char] + 1)
            if longest[1] - longest[0] < i - start_idx + 1:
                longest = [start_idx, i + 1]
            seen[char] = i

        return longest[1] - longest[0]
