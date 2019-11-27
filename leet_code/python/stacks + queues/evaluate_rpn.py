# O(n) time and space
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:

        operators = {
            '+': lambda y, x: x + y,
            '-': lambda y, x: x - y,
            '*': lambda y, x: x * y,
            '/': lambda y, x: int(x / y)
        }
        result = []

        for token in tokens:
            if token in operators:
                val = operators[token](result.pop(), result.pop())
                result.append(val)
            else:
                result.append(int(token))

        return result[-1]
