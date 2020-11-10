# O(n log n) time | O(n) space
def smallerNumbersThanCurrent(self, nums):
        sorted_array = sorted([x for x in nums])
        nums_hash = {}

        for i in range(len(nums)):
            num = sorted_array[i]
            if(i > 0 and sorted_array[i-1] == sorted_array[i]):
                continue
            nums_hash[num] = i
        
        res = []
        for num in nums:
            res.append(nums_hash[num])
        return res