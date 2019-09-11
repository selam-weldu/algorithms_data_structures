// helper function method
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

// pure recurssion
function collectStrings(obj){
    let arr = [];

    for(let key in obj){
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            arr = arr.concat(collectStrings(obj[key]))
        } else if(typeof obj[key] === 'string'){
            arr.push(obj[key])
        }
    }
    return arr;
}