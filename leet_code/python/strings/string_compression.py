# O(n) time | O(1) space
def compress(self, chars: List[str]) -> int:
        idx = i = j = 0

        while i < len(chars):
            while (j < len(chars) and (chars[i] == chars[j])):
                j += 1

            chars[idx] = chars[i]
            idx += 1

            if j - i > 1:
                count = str(j-i)
                for char in count:
                    chars[idx] = char
                    idx += 1

            i = j

        return idx
