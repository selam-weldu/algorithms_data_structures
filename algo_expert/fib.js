// Time: O(2^n), every function call, makes two other calls
// Space: O(n)...stack frames, at any given time a function 
// call has at most n frames on the call stack
function getNthFib(n){
    if(n === 1) return 0;
    if(n === 2) return 1;

    return getNthFib(n-1) + getNthFib(n-2)
}

// Time: O(n), the function calculates the nth fib number once and stores values in the hash table,
// then every secondary call is constant time because that value is stored in the hash table
// Space: O(n), due to call stack and hash table
function getNthFib(num) {
    let memoized = { 1: 0, 2: 1 };

    if (num in memoized) {
        return memoized[num];
    }

    memoized[num] = getNthFib(num - 1) + getNthFib(num - 2);
    return memoized[num];
}

// Time: O(n)
// Space: O(1)
function getNthFib(num) {
    let counter = 3,
        arr = [0, 1],
        fib = 0;

    while (counter <= num) {
        fib = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = fib;
        ++counter
    }
    return num === 1 ? arr[0] : arr[1];
}