# O(klogk) time, O(k) space
def kth_largest_elements_in_heap(arr, k):
    if k < 0: return []

    max_heap = [(-arr[0], 0)]
    heapa.heapify(max_heap)
    result = []

    for _ in range(k):
        candidate_idx = max_heap[0][1]

        result.append(-heapq.heappop(max_heap)[0])

        left_child_idx = 2 * candidate_idx + 1
        right_child_idx = 2 * candidate_idx + 2

        if left_child_idx < len(arr):
            heapq.heappush(max_heap, (-arr[left_child_idx], left_child_idx))

        if right_child_idx < len(arr):
            heapq.heappush(max_heap, (-arr[right_child_idx], right_child_idx)

    return result
    