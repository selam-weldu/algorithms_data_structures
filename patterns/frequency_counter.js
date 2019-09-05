// Given two arrays, does the second array contain the square of only the numbers
// in array one.
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

// console.log(frequencyCounter([1,2,4],[1,4]));

// Given two positive integers, find out if the numbers have the same frequency of digits
function sameFrequency(int1, int2) {
    if(int1.length !== int2.length) return false
    let frequencyCounter = {};

    int1 = String(int1);
    int2 = String(int2);

    for (let int of int1) {
        frequencyCounter[int] = ++frequencyCounter[int] || 1;
    }

    for (let int of int2) {
        if (!frequencyCounter[int]) {
            return false;
        } else {
            frequencyCounter[int] -= 1;
        }
    }
    return true;
}

// checks if there are duplicates
// Time and Space: O(n)
function areThereDuplicates(...args) {
    //   add elements to hash,
    // if element already in hash, return false
    // return true at the end

    let map = {};

    for (let ele of args) {
        if (map[ele]) {
            return true;
        } else {
            map[ele] = true;
        }
    }
    return false
}

// Time: O(nlogn)
// space: O(1)
function areThereDuplicates(...args){
    args.sort((a,b) => a - b);

    for (let i = 0; i < args.length - 1; i++) {
        let j = i + 1;

        if(args[i] === args[j]){
            return true;
        }
    }

    return false;
}

// one-liner
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}