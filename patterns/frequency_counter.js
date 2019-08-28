function frequencyCounter(arr1, arr2){
    // haspMap both arrarys, values as K and frequency as V, use two separate loops
    // loop over either hashMap
    //check if corresponding k is in the other hashMap
    // if not, return false
    // if yes,
    // check if it's v matchs the corresponding v in the other hashMap
    // if not return false
    // if yes keep looping
    // return true outside of loop

    if(arr1.length !== arr2.length){
        return false
    }
    let hashMap1 = {};
    let hashMap2 = {};

    for(let el of arr1){
        hashMap1[el] = ++hashMap1[el] || 1
    }

    for(let el of arr2){
        hashMap2[el] = ++hashMap2[el] || 1
    }

    for(let key in hashMap1){
        if(hashMap2[key ** 2] < 1){
            return false
        }

        if(hashMap1[key] !== hashMap2[key ** 2]){
            return false
        }
    }
    return true
}

console.log(frequencyCounter([1,2,4],[1,4]));