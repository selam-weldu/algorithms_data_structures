function stringifyNumbers(map) {
    let newObj = {};

    for (let key in map) {
        if (typeof map[key] === 'object' && !Array.isArray(map[key])) {
            newObj[key] = stringifyNumbers(map[key]);
        } else if (typeof map[key] === 'number') {
            newObj[key] = map[key].toString()
        } else {
            newObj[key] = map[key]
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/