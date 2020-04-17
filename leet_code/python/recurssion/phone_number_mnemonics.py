# O(n4^n) time
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits or len(digits) < 1:
            return []

        mappings = ["0", "1", "abc", "def", "ghi",
                    "jkl", "mno", "pqrs", "tuv", "wxyz"]

        results = []
        self.generate(digits, 0, "", results, mappings)

        return results

    def generate(self, digits, idx, current, results, mappings):
        if idx == len(digits):
            results.append(current)
            return

        letters = mappings[int(digits[idx])]

        for letter in letters:
            self.generate(digits, idx + 1, current + letter, results, mappings)
