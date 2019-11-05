# O(n) time, O(n) space
class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {
            "[": "]",
            "(": ")",
            "{": "}"
        }

        opening_brackets = "({["
        closing_brackets = ")}]"
        stack = []

        for i, char in enumerate(s):
            if char in opening_brackets:
                stack.append(char)
            elif char in closing_brackets:
                if len(stack) == 0:
                    return False

                if brackets[stack[-1]] != char:
                    return False
                else:
                    stack.pop()
        return len(stack) == 0




