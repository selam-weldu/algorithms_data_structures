//init res arr
//sort input arr
//two loops
//first loop, setup 3 pointers, check edge cases(if arr[i] > target or is duplicate)
//second loop, check sum === target
// if ===, add triplets to res arr, ++left, --right, check edge cases for each pointers
// if < 0, ++left
//if > 0, --right
//return res arr

function threesum(arr){
    let triplets = [];
    arr.sort((a,b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        // since arr is sorted, adding any number will make sum > 0
        if(arr[i] > 0) break;
        // optimization, so we don't add the same triplets into result more than once
        if(i > 0 && arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length - 1;

        while(left < right){
            sum = arr[i] + arr[left] + arr[right];
            if(sum === 0){
                triplets.push([arr[i],arr[left],arr[right]]);
                
                while(left < right && arr[left] === arr[left + 1]) ++left;
                while(left < right && arr[right] === arr[right - 1]) --right;

                ++left;
                --right;
            } else if(sum < 0){
                ++left;
            } else {
                --right;
            }
        }
    }
    return triplets;
}