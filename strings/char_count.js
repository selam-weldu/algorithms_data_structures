function charCount(str){
    let hashMap = {};
    for(let char of str){
        // regex to test if char is alphanumeric
        if((/[a-zA-Z0-9]/).test(char)){
            char = char.toLowerCase();
            hashMap[char] = ++hashMap[char] || 1
            // if(hashMap[char] > 0){
            //     hashMap[char] += 1;
            // } else {
            //     hashMap[char] = 1;
            // }
        }
    }
    
    return hashMap;
}

console.log(charCount("helloHI"));