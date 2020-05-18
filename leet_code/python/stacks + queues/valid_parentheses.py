# O(n) time and space
def balancedBrackets(string):
    stack = []
    openBrackets = '([{'
    closingBrackets = ')}]'
    pairs = {')': '(', '}': '{', ']': '['}

    for char in string:
        if char in openBrackets:
            stack.append(char)
        elif char in closingBrackets:
            if not len(stack) or stack[-1] != pairs[char]:
                return False
            else:
                stack.pop()
    return not len(stack)
