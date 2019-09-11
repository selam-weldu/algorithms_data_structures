function collectStrings(obj) {
    // iterate obj and if value is string add to arr
    // if it's an object call helper function again
    let arr = [];

    function _collect(map) {
        for (let key in map) {
            if (typeof map[key] === 'object' && !Array.isArray(map[key])) {
                _collect(map[key])
            } else if (typeof map[key] === 'string') {
                arr.push(map[key])
            }
        }
        return
    }

    _collect(obj)
    return arr;
}