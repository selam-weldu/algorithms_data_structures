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
        maxLength = Math.max(maxLength, (right - left + 1));
    }

    return maxLength;
};