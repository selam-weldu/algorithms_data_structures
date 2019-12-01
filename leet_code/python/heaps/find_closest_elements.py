# Given a sorted array, two integers k and x, 
# find the k closest elements to x in the array. 
# The result should also be sorted in ascending order. 
# If there is a tie, the smaller elements are always preferred.

# O(nlogk) time, O(k) space
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        
        max_heap = [(-abs(elt-x),-elt) for elt in arr[:k]]
        heapq.heapify(max_heap)
        
        for num in arr[k:]:
            heapq.heappush(max_heap,(-abs(num-x), -num))
            heapq.heappop(max_heap)
            
            
                
        return sorted([-num[1] for num in max_heap])