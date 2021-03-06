// O(n) time
// O(n) space
// Given two strings s and t, write a function to determine if t is an anagram of s.
const isAnagram = function (str1, str2) {
    // init hashMap
    // add chars of first string into hashMap char as key and count as value
    // iterate over second string
    // check if char2 is in hashMap
    // if no, return false
    // if yes, subtract 1 from value
    // outside of loop, return true if all values in hashmap are 0
   
    if(str1.length !== str2.length){
        return false;
    }
    let hashMap = {};

    for(let char of str1){
        hashMap[char] = ++hashMap[char] || 1;
    }

    for(let char of str2){
        // if we have value as 0 and we hit this condition it means the char
        // has a different count in the each string
        if(!hashMap[char]){
            return false
        } else {
            hashMap[char] -= 1;
        }
    }

    return true

    // for(let char of t){
    //     if(char in hashMap){
    //         hashMap[char] -= 1;
    //     } else {
    //         return false
    //     }
    // }

    // return Object.values(hashMap).every(ele => ele === 0);

};