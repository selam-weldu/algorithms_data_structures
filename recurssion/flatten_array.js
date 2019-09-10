function flatten(arr) {
    let flattened = [];
    function _flatten(array) {
        if (!array.length) return;

        if (Array.isArray(array[0])) {
            _flatten(array[0])
        } else {
            flattened.push(array[0])
        }
        _flatten(array.slice(1))
    }
    _flatten(arr)
    return flattened;
}