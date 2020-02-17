# O(n) time, O(1) space
def canJump(self, nums):
    furthest_distance = 0
    last_index = len(nums) - 1

    idx = 0
    while idx <= furthest_distance and furthest_distance < last_index:
        current_distance = nums[idx] + idx
        furthest_distance = max(furthest_distance, current_distance)

        idx += 1

    return furthest_distance >= last_index
