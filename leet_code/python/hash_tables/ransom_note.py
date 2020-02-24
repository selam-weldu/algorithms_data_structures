import collections
# O(n + m) space and time
def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        char_count_note = collections.Counter(ransomNote)
        char_count_magazine = collections.Counter(magazine)

        for note in char_count_note:
            if not char_count_magazine or char_count_note[note] > char_count_magazine[note]:
                return False
        return True
