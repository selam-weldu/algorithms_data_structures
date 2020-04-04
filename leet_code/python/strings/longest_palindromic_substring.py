# O(n^2) time, O(1) space
def longestPalindromicSubstring(string):
    if len(string) < 2:
        return string

	current_longest = [0, 0]
	for i in range(len(string)):
		odd = getPalindrome(string, i-1, i+1)
		even = getPalindrome(string, i-1, i)

		longer = max(odd, even, key=lambda x: x[1] - x[0])
		current_longest = max(current_longest, longer, key=lambda x: x[1] - x[0])

	return string[current_longest[0]: current_longest[1] + 1]


def getPalindrome(string, left, right):
	while left >= 0 and right < len(string):
		if string[left] != string[right]:
			break
		left -= 1
		right += 1

	return [left + 1, right - 1]
