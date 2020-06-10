# O(c) time | O(1) space: c= total length of all the words in the input list added together
# build graph, char1->char2
# track in_Degree, unique chars
# remove edges, no_dep_letters
# check len(order) and len(chars)

from collections import defaultdict
class Solution:
    def alienOrder(self, words: List[str]) -> str:
        graph = defaultdict(list)
        in_degree = defaultdict(int)
        chars = {char for word in words for char in word}

        for word1, word2 in zip(words, words[1:]):
            for char1, char2 in zip(word1, word2):
                if char1 != char2:
                    graph[char1].append(char2)
                    in_degree[char2] += 1
                    break
            else:
                if len(word1) > len(word2):
                    return ""

        no_prev_letter = [char for char in chars if in_degree[char] == 0]
        ordered_letters = []
        while no_prev_letter:
            letter = no_prev_letter.pop()
            ordered_letters.append(letter)

            for c in graph[letter]:
                in_degree[c] -= 1
                if in_degree[c] == 0:
                    no_prev_letter.append(c)

        return "".join(ordered_letters) if len(ordered_letters) == len(chars) else ""
