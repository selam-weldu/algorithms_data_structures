# O(1) time and space
def reverseBits(self, n: int) -> int:
        result = 0
        block = 31
        
        while n:
            result += (n&1) << block
            n = n >> 1
            block -= 1
        return result