let twoSum = (nums, target) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];

        if (another in map) {
            return [map[another], i];
        }

        map[nums[i]] = i;
    }

    return null;
};