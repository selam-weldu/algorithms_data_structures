function isValid(str){
    // init hashMap with matching pairs
    // init stack
    // iterate str, if char is key in hashMap push it's value to stack
    // if it's closing check if char === stack.pop()
    // if not return false
    // return stack.length(bool)

    let brackets = { "(": ")", "{": "}", "[": "]" },
        stack = [];

    for (let char of str) {
        if (char in brackets) {
            stack.push(brackets[char]);
        } else if (char === ')' || char === '}' || char === ']') {
            if (char !== stack.pop()) return false;
        }
    }
    return stack.length === 0;    
}