
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        import heapq
        
        min_heap = []
        
        for i in range(m):
            heapq.heappush(min_heap, nums1[i])
            
        for j in range(n):
            heapq.heappush(min_heap, nums2[j])
            
        for i in range(len(nums1)):
            nums1[i] = heapq.heappop(min_heap)
        
        
          
        