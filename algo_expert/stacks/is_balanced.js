function balancedBrackets(string) {

    // edge cases: empty string is balanced
    // input string, output true/false

    // {[()]} true
    // {[(])} false
    // {{[[(())]]}} true

    // init a map with key-value pair of matching brackets
    // init a stack, use array
    // iterate string, for each char check if it's in map,
    // if yes, add map(char) or the closing bracket into the stack
    // check if char is a closing bracket if it is,
    // check if the last ele in the stack === char
    // if no, return false
    // return stack.length in the end, because exiting the loop is a false positive
    // there might still be unmatched brackets in the stack

    const map = {
        '{': '}',
        '(': ')',
        '[': ']'
    };

    let stack = [];

    for (let char of string) {
        if (char in map) {
            stack.push(map[char])
        } else if (char === ']' || char === '}' || char === ')') {
            if (char !== stack.pop()) return false;
        }
    }

    return !stack.length ? true : false;
}


// As the stack could have a lot of repeat characters, it may be beneficial to store it as follows.

//     Input: [[[[[[[[[[(((((((((())))))))))))))]]]]]]]]]]
// Longer stack: [[[[[[[[[[((((((((((
//     Better stack :
// Object(“[” and 10 )
// Object(“(” and 10)

// Make everything into objects so you only have to pop 
// the stack once without doing wacky calculations.The object holds the 
// character and the number of times it occurred.

// Pop the stack, check its character; if it’s a new opening bracket of the 
// same kind, increment the counter.Decrement the counter for the closing 
// bracket.If the closing bracket brings it to 0, then don’t push the object 
// back to the stack.That way you can handle([]{}).If the new character is 
// different from the last one, create a new object with the count at 1, and 
// the set the new character accordingly.