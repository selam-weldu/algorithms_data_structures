# O(n2^n) time
def next_number(self, number):
        result = []
        idx = 0

        while idx < len(number):
            count = 1
            while idx + 1 < len(number) and number[idx] == number[idx + 1]:
                idx += 1
                count += 1
            result.append(str(count) + number[idx])
            idx += 1

        return "".join(result)

def countAndSay(self, n: int) -> str:
    if n == 0: return
    if n == 1: return '1'
    
    s = '1'
    for _ in range(1,n):
        s = self.next_number(s)
        
    return s


# 1.     1
# 2.     11
# 3.     21
# 4.     1211
# 5.     111221
