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

console.log(sumZero([-2,0,2,4,5]));