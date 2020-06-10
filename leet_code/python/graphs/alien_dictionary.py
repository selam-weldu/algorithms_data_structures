# O(c) time | O(1) space: c= total length of all the words in the input list added together
class Solution:
    def alienOrder(self, words: List[str]) -> str:

        chars = {char for word in words for char in word}
        graph = defaultdict(list)
        i_degree = defaultdict(int)

        for word1, word2 in zip(words, words[1:]):
            for char1, char2 in zip(word1, word2):
                if char1 != char2:
                    if char2 not in graph[char1]:
                        graph[char1].append(char2)
                        i_degree[char2] += 1
                    break
            else:
                if len(word1) > len(word2):
                    return ""

        Q = [x for x in chars if i_degree[x] == 0]
        L = []

        while Q:
            n = Q.pop()
            L.append(n)

            for node in graph[n]:
                i_degree[node] -= 1
                if i_degree[node] == 0:
                    Q.append(node)

        return "".join(L) if len(L) == len(chars) else ""
