def largestRange(array):
    best_range = []

    longest_range = 0
    nums = {}

    for num in array:
            nums[num] = True

    for elt in array:
        if not nums[elt]:
            continue

        nums[elt] = False
        current_range = explore(array, nums, elt)
        current_length = current_range[1] - current_range[0]

        if current_length >= longest_range:
            longest_range = current_length
            best_range = current_range
    return best_range


def explore(array, nums, num):
	left = num - 1
	right = num + 1

	while left in nums:
		nums[left] = False
		left -= 1

	while right in nums:
		nums[right] = False
		right += 1

	return [left + 1, right - 1]
