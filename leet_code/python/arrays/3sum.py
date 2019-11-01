class Solution:
    def threeSum(self, nums):
        nums.sort()
        triplets = []
        length = len(nums)
        for i in range(length - 2): #last two elts would have been checked
            left = i + 1
            right = length - 1
            
            if nums[i] > 0: break # positive numbers will add upto more than zero
            if i > 0 and nums[i] == nums[i-1]: continue # avoid duplicates
                
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]
                if current_sum < 0:
                    left += 1
                elif current_sum > 0:
                    right -= 1
                else:
                    triplets.append([nums[i],nums[left],nums[right]])
                    # to avoid duplicates
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1
        return triplets