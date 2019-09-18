
// ES6
const containsDuplicates = (nums) => {
    // check if number in hash
    // if yes, return true
    //  if no, add to hash
    //  return false at the end

    let hashMap = {};

    for(let num of nums){
        if (num in hashMap) return true
        hashMap[num] = true
    }
    return false
}

let containsDuplicate = function (nums) {
    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashMap) {
            return true;
        } else {
            hashMap[nums[i]] = true
        }
    }
    return false;
};