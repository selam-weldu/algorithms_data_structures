# O(N+klogN) time | O(N) space
# N: length of words
from collections import Counter
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        count = Counter(words)
        max_heap = [(-freq, word) for word, freq in count.items()]
        heapq.heapify(max_heap)
        return [heapq.heappop(max_heap)[1] for _ in range(k)]
