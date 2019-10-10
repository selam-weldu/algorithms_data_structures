// add all nums in array to hash and set value to true
// iterate array and first check if the elements value
// is false, if false continue
// always make sure to mark element as false in hash before
// exploring it's range
// check all left and right and stop loops when element is not in hash

// O(n) time - marking elements false in hash table keeps us 
// from doing unnessary work
// O(n) space
function largestRange(array) {
    let nums = {};
    let range = [];
    let largestRange = 0;

    for (let num of array) {
        nums[num] = true;
    }

    for (let num of array) {
        if (nums[num] === false) continue;

        // 		lets explore
        nums[num] === false; //******
        let left = num - 1;
        let right = num + 1;
        let currentLength = 1; // ********

        while (left in nums) {
            nums[left] = false;
            left -= 1;
            ++currentLength;
        }

        while (right in nums) {
            nums[right] = false;
            right += 1;
            ++currentLength;
        }

        if (currentLength > largestRange) {
            largestRange = currentLength;
            range = [left + 1, right - 1] // ******
        }
    }

    return range;
}


