// Given an array of strings, capitalize the first letter of each string in the array.
// helper function recurssion
function capitalizeFirst(arr){
    let caps = [];

    function _capitalize(array){
        if(!array.length) return

        let str = array[0][0].toUpperCase() + array[0].substr(1);
        caps.push(str);
        _capitalize(array.slice(1))
    }
    _capitalize(arr)
    return caps;
}

// pure recurssion
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;

}


capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']