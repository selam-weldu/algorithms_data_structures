# O(w*nlogn) time | O(wn) space
# w: number of words, n:length of longest word


def groupAnagrams(words):
    anagrams = {}


    for word in words:
            sorted_word = "".join(sorted(word))
            if sorted_word in anagrams:
                anagrams[sorted_word].append(word)
            else:
                anagrams[sorted_word] = [word]
        return list(anagrams.values())
