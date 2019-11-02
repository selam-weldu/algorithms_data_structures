# O(n) time
# O(min(u)) space, u: len(unique char in string)

def longestSubstringWithoutDuplication(string):
    start_idx = 0
    longest = [0, 1]
    seen = {}

    for i, char in enumerate(string):
            if char in seen:
                start_idx = max(start_idx, seen[char] + 1)
            if longest[1] - longest[0] < i + 1 - start_idx:
                longest = [start_idx, i + 1]
            seen[char] = i

	return string[longest[0]: longest[1]]
