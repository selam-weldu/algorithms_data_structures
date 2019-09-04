const groupAnagrams = function (strs) {
    // init map, and keep sorted str as keys and array with anagrams as values
    // for each str of strs, sort the str
    // if it's not in map, make it a key and it's value []
    // if in map push str value array
    // return values of map

    let hashMap = {};

    for (str of strs) {
        let s = str.split('').sort().join('')

        if (!hashMap[s]) {
            hashMap[s] = [str];
        } else {
            hashMap[s].push(str);
        }
    }

    return Object.values(hashMap);
};