function reverse(str) {
    let reversed = [];

    function _reverse(s) {
        if (!s.length) return;

        reversed.push(s[s.length - 1]);
        
        _reverse(s.slice(0, s.length - 1))
    }

    _reverse(str);

    return reversed.join('')
}