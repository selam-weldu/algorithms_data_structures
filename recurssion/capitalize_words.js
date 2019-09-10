function capitalizeWords(words) {
    let caps = [];

    function _capitalize(arr) {
        if (!arr.length) return
        caps.push(arr[0].toUpperCase());
        _capitalize(arr.slice(1))
    }
    _capitalize(words)
    return caps;
}