const groupAnagrams = function (strs) {
    // init map, and keep sorted str as keys and array with anagrams as values
    // for each str of strs, sort the str
    // if it's not in map, make it a key and it's value []
    // if in map push str value array
    // return values of map
    
    let map = {};

    for (str of strs) {
        let k = str.split('').sort().join('');

        if (!map[k]) {
            map[k] = [];
        }
        map[k].push(str);
    }

    return Object.values(map);
};