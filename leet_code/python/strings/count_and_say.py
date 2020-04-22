# O(n^2) time | O(n) space
class Solution:
    def next_number(self, number):
        result = []

        i = j = 0
        while i < len(number):
            while (j < len(number) and number[i] == number[j]):
                j += 1

            count = j - i
            result.append(str(count) + number[i])

            i = j

        return "".join(result)

    def countAndSay(self, n: int) -> str:
        if n == 0:
            return
        if n == 1:
            return '1'

        s = '1'
        for _ in range(2, n+1):
            s = self.next_number(s)

        return s



# 1.     1
# 2.     11
# 3.     21
# 4.     1211
# 5.     111221
# 6.     312211
