# O(n) time
# O(min(u)) space, u: len(unique char in string)


def longestSubstringWithoutDuplication(string):
    seen_letters = {}
    longest_substr = [0, 0]

    start = 0
    for i,char in enumerate(string):
        if char in seen_letters:
            start = max(start, seen_letters[char] + 1)
    
        seen_letters[char] = i    
        longest_substr = max(longest_substr, [start,i], key=lambda x: x[1]-x[0])


    return string[longest_substr[0]:longest_substr[1]+1]
