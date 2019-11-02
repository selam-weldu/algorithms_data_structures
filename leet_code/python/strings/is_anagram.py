# O(n) time and space
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(t) != len(s):
            return False

        s_char_mapping = {}

        for char in s:
            if char in s_char_mapping:
                s_char_mapping[char] += 1
            else:
                s_char_mapping[char] = 1

        for char in t:
            if char in s_char_mapping and s_char_mapping[char] > 0:
                s_char_mapping[char] -= 1
            else:
                return False

        char_values = s_char_mapping.values()

        # if all(v == 0 for v in char_values):
        #     return True
        # else:
        #     return False

        for v in char_values:
            if v != 0:
                return False
        return True
