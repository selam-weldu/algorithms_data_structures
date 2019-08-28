var isAnagram = function (s, t) {
    // init hashMap
    // add chars of first string into hashMap char as key and count as value
    // iterate over second string
    // check if char2 is in hashMap
    // if no, return false
    // if yes, subtract 1 from value
    // outside of loop, return true if all values in hashmap are 0
   
    if(s.length !== t.length){
        return false;
    }
    let hashMap = {};

    for(let char of s){
        hashMap[char] = ++hashMap[char] || 1;
    }

    for(let char of t){
        if(char in hashMap){
            hashMap[char] -= 1;
        } else {
            return false
        }
    }

    let count = Object.values(hashMap);

    return count.every(ele => ele === 0);

};