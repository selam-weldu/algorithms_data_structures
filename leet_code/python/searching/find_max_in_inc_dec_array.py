def find_max_element(arr):
    if len(arr) == 0:
        raise Error('No elements in the input array')
    if len(arr) == 1:
        return arr[0]
    if len(arr) == 2:
        return max(arr[0], arr[1])

    low = 0
    high = len(arr) - 1
    while low < high:
        mid = (low + high) / 2
        # Compare mid's neighbors
        if arr[mid - 1] < arr[mid] and arr[mid] > arr[mid + 1]:
            # Found max
            return arr[mid]
        elif arr[mid -1] < arr[mid]:
            low = mid
        else:
            high = mid