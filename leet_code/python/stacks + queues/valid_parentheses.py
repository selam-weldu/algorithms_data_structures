# O(n) time, O(n) space
class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {'(': ')', '{': '}', '[': ']'}
        left_chars = []

        for char in s:
            if char in brackets:
                left_chars.append(char)
            elif char in ']})':
                if not left_chars or brackets[left_chars[-1]] != char:
                    return False
                left_chars.pop()

        return not left_chars




