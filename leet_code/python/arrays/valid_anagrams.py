from collections import defaultdict

# O(n) time | O(1) space
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        char_count = defaultdict(int)
        for i in range(0, len(s)):
            char_count[s[i]] += 1
            char_count[t[i]] -= 1
        return all(x == 0 for x in char_count.values())
