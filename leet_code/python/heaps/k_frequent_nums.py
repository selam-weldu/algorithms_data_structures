# O(Nlogk) if k < Nk<N and \mathcal{O}(N)O(N) in the particular case of N = kN=k.
# O(N+k) space
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency = Counter(nums)
        heap = []
        for num, count in frequency.items():
            heapq.heappush(heap, (count, num))
            if len(heap) > k:
                heapq.heappop(heap)

        return [num_count[1] for num_count in heap]
