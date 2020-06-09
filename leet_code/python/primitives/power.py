
# O(log n) time | space
def myPow(x,n):
    if n < 0:
        x = 1/x
        n = -n
    return fastPow(x, n)

def fastPow( base, power):
    if power == 0:
        return 1
    half = fastPow(base, power//2)
    if power % 2 == 0:
        return half * half
    else:
        return half * half * base
