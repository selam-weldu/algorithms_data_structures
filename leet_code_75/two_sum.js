// time: O(n)
//space: O(n)


let twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {

        let match = target - nums[i]

        if (match in map) return [i, map[match]]

        map[nums[i]] = i

    }
    return null
};

// let twoSum = (nums, target) => {
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {
//         let another = target - nums[i];

//         if (another in map) {
//             return [map[another], i];
//         }

//         map[nums[i]] = i;
//     }

//     return null;
// };