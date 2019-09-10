function isPalindrome(str) {
    if (str.length <= 1) return true;

    let first = str[0],
        last = str[str.length - 1];

    if (first !== last) return false;

    return isPalindrome(str.slice(1, (str.length - 1)));
}