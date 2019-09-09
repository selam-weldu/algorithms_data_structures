// O(n) Space and Time
const lengthOfLongestSubstring = function (s) {
    let left = 0, 
        maxLength = 0,
        char = '', 
        map = {};

    for (let right = 0; right < s.length; right++) {
        char = s[right];
        if (char in map) {
            left = Math.max(left, map[char] + 1)
        }

        map[char] = right;
        // + 1 accounts for index starting at 0
        maxLength = Math.max(maxLength, (right - left + 1));
    }

    return maxLength;
};