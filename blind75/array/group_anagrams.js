const groupAnagrams = function (strs) {
    let map = {};

    for (str of strs) {
        let k = str.split('').sort().join('')

        if (!map[k]) {
            map[k] = [];

        }
        map[k].push(str)
    }

    return Object.values(map);
};