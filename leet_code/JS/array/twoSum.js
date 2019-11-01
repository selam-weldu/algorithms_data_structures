// init hashMap
//iterate array, for each el find match(target - el)
// check if match is in hashMap
// if yes, return [match,arr]
// if no, add ele to hashMap
// return [] at the end of loop
function twoSum(arr,target){
    let hashMap = {},
        match = null;

    for(let el of arr){
        match = target - el;
        if(match in hashMap){
            return [match, el].sort((a,b) => a - b);
        } else {
            hashMap[el] = true;
        }
    }  
    
    return []
}

// console.log(twoSum([7,5,3,4],6))