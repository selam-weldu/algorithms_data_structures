// accepts a sorted array
function sumZero(arr){
    //setup two pointer, at the start and end of the arr
    // check if they sum to zero at each iteration
    // yes, return pair
    // if sum < 0, ++left
    // if sum > 0, --right

    let left = 0;
    let right = arr.length - 1;
     
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            --right;
        } else {
            ++left;
        }
    }

    return []
}

// console.log(sumZero([-2,0,2,4,5]));

//arr is sorted
function countUniqueValues(arr){
    // start counter at 1 if arr is not empty
    // init two pointer
    // check if arr[i] !== arr[j]
    // if yes, increment counter
    // return counter at the end
    if(arr.length === 0) return 0

    let count = 1
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;

        if(arr[i] !== arr[j]){
            ++count;
        }
    }

    return count
}

// 7
// console.log(countUniqueValues([1,2,3,4,4,7,7,7,12,12,13]));
     
// mutates arr
function countUniqueValues2(arr){
    // two pointer
    // i = 0 and j loops the rest of the arr
    // at each iteration check if arr[i] !== arr[j]
    // if yes, ++i and arr[i] = arr[j]
    // return i + 1, because index starts at 0

    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            ++i;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

// console.log(countUniqueValues2([1,2,3,4,4,7,7,7,12,12,13]));

// Time: O(n), space: O(1)
function averagePair(arr, target) {
    //   if empty or one element array return false
    // two pointers at start and end
    // get average, if it's too small ++left, else --right
    // if equal return true

    if (arr.length <= 1) return false;

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let currAvg = (arr[left] + arr[right]) / 2;
        if (currAvg === target) {
            return true;
        } else if (currAvg < target) {
            ++left;
        } else {
            --right;
        }
    }
    return false;
}

// Time: O(n), space: O(1)
function isSubsequence(str1, str2) {
    // if str2 < str1 return false
    // two pointers, for each string
    // if the chars are equal increament both pointers, else
    // increment the second pointer
    // if end of second string inside loop return false
    // if break out of loop return true

    if (str1.length > str2.length) return false;

    let i = 0;
    let j = 0;
    while (i < str1.length) {
        if (j === str2.length) return false;

        if (str1[i] === str2[j]) {
            ++i;
            ++j;
        } else {
            ++j;
        }
    }
    return true
}