# O(n) time and O(1) space
class Solution:
    def myAtoi(self, str: str) -> int:
        INT_MAX = 2147483647
        INT_MIN = -2147483648
        result = 0

        if not str:
            return result

        i = 0
        while i < len(str) and str[i] == " ":
            i += 1

        sign = 1
        if i < len(str) and str[i] in "+-":
            if str[i] == "-":
                sign = -1
            i += 1

        while i < len(str) and str[i] >= '0' and str[i] <= '9':
            result = result * 10 + ord(str[i]) - ord('0')
            i += 1

        if result > INT_MAX:
            return INT_MAX if sign > 0 else INT_MIN
        else:
            return sign * result
