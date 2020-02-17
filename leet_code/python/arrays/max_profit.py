# O(n) time, O(1) space
def maxProfit(self, prices):
        if len(prices) <= 1:
                return 0

        max_profit = float("-inf")
        min_price = float("inf")

        for price in prices:
            min_price = min(min_price, price)
            current_profit = price - min_price
            max_profit = max(max_profit, current_profit)

        return max_profit
