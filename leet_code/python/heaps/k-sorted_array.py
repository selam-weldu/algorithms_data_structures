import heapq
#O(Nlogk) time | O(n) space
def sort_k_messed_array(arr, k):
  output = []
  
  min_heap = []
  for num in arr:
    heapq.heappush(min_heap,num)
    if len(min_heap) > k:
      elt = heapq.heappop(min_heap)
      output.append(elt)
      
  for _ in range(len(min_heap)):
    output.append(heapq.heappop(min_heap))
  
  
  return output


#O(Nlogk) time | O(k) space
def sort_k_messed_array2(arr, k):
  idx = 0
  min_heap = []
  for num in arr:
    heapq.heappush(min_heap,num)
    if len(min_heap) > k:
      elt = heapq.heappop(min_heap)
      arr[idx] = elt
      idx += 1
      
  for _ in range(len(min_heap)):
    elt = heapq.heapop(min_heap)
    arr[idx] = elt
    idx += 1
  
  return arr