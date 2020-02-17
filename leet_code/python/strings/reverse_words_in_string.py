# O(n) time and O(1) space
def reverse(self, s, i, j):
        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1; j -= 1

def reverseWords(self, s: str) -> str:
    s = list(" ".join(s.split()))[::-1]
    
    start, finish = 0, 0
    while finish < len(s):
        start = finish
        while finish < len(s) and not s[finish].isspace():
            finish += 1
        self.reverse(s, start, finish-1)
        finish += 1
        
    return "".join(s)
