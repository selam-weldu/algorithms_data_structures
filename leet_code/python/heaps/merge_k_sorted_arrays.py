# iter(array)
# add the first elts in all arrays into min_heap
# everytime pop from min_heap add elts from the same array elt is from

# O(nlogk) time | O(k) space
import heapq
def mergeSortedArrays(arrays):
    arr_iters = [iter(array) for array in arrays]
    min_heap = []
    for itr_idx in range(len(arr_iters)):
		iterator = arr_iters[itr_idx]
        current = next(iterator, None)
        if current is not None:
            heapq.heappush(min_heap,(current,itr_idx))

    sorted_array = []
    while min_heap:
        elt , elt_idx = heapq.heappop(min_heap)
        sorted_array.append(elt)
        next_elt = next(arr_iters[elt_idx],None)
        if next_elt is not None:
            heapq.heappush(min_heap,(next_elt,elt_idx))

    return sorted_array