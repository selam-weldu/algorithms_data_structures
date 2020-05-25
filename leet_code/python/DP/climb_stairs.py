# O(n) time and space
def climbStairs(self, n: int) -> int:
    memo = [0 for x in range(n+1)]
    return self.count_ways(n, memo)


def count_ways(self,n,memo):
    if n < 0:
        return 0
    if n == 0 or n == 1:
        return 1
    if memo[n]:
        return memo[n]
    
    memo[n] = self.count_ways(n - 1,memo) + self.count_ways(n - 2,memo)
    return memo[n]


# O(n) time and space
def climbStairs(n):
    if n <= 1:
        return 1

    dp = [None for _ in range(n+1)]
    dp[0] = dp[1] = 1

    for i in range(2,len(dp)):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[-1]
