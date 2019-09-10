
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

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']