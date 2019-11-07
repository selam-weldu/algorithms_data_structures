// 'BCADBFICA' -> 'D'
// 'ABDDAB' -> NULL

// init map
// iterate through string, and add k:char v:idx
// if map[char], set v:Inifinity
// outside of loop find minIdx from values in the map
// if minIdx = infinity, return null because that would mean 
// all of them are repeating chars, else return string[minIdx]


function firstNonRepeatingChar(str){
    let map = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        if(char in map){
            map[char] = Infinity;
        }else{
            map[char] = i;
        }
    }

    let indices = Object.values(map);
    let minIdx = Math.min(...indices);

    if(minIdx === Infinity) return null;

    return str[minIdx];
}

// let input = 'ABDDAB'
// let input = 'BCADBFICA'
let input = '';

let result = firstNonRepeatingChar(input);
console.log(result);