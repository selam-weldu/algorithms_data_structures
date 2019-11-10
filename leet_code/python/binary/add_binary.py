# O(n) time and space
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i = len(a) - 1
        j = len(b) - 1
        carry = 0
        result = ""

        while i >= 0 or j >= 0 or carry >= 0:
            sum = 0
            if i >= 0:
                sum += int(a[i])
                i -= 1

            if j >= 0:
                sum += int(b[j])
                j -= 1

            sum += carry
            result = str(sum % 2) + result
            carry = sum // 2

        return result
