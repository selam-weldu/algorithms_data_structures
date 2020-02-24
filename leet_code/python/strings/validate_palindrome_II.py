# O(n) time, O(1)space
def validPalindrome(s: str) -> bool:
    if len(s) <= 1:
        return True

    i, j = 0, len(s) - 1
    while i < (len(s) // 2):
        if s[i] == s[j]:
            i += 1
            j -= 1
        else:
            return is_palindrome(s, i, j-1) or is_palindrome(s, i+1, j)
    return True

def is_palindrome(s, start, finish):

    while start < finish:
        if s[start] != s[finish]:
            return False
        start += 1
        finish -= 1
    return True
