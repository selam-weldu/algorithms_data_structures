# O(n) time and space
class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []

        for char in path.split('/'):
            if char == "" or char == ".":
                continue
            if char == "..":
                if len(stack) > 0:
                    stack.pop()
            else:
                stack.append('/'+char)

        if not len(stack):
            return '/'
        return ''.join(stack)
