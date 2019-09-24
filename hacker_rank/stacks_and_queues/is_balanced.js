// O(n) Time and space
function isBalanced(s) {
    // edge cases: empty string is balanced
    // input string, output Y/N

    // {[()]} YES
    // {[(])} NO
    // {{[[(())]]}} YES

    // init a map with key-value pair of matching brackets
    // init a stack, use array
    // iterate string, for each char check if it's in map,
    // if yes, add map(char) or the closing bracket into the stack
    // check if char is a closing bracket if it is,
    // check if the last ele in the stack === char
    // if no, return false
    // return stack.length in the end, because exiting the loop is a false positive
    // there might still be unmatched brackets in the stack
    let map = { '(': ')', '[': ']', '{': '}' };
    let stack = [];

    for (let char of s) {
        if (char in map) {
            stack.push(map[char])
        } else if (char === ']' || char === '}' || char === ')') {
            if (char !== stack.pop()) return 'NO';
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}