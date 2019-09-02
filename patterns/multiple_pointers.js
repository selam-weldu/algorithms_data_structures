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