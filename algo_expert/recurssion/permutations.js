// Time:
// Space: 
function getPermutations(arr){
    // return 2D array with permutations
    // base case: if arr is empty and there is a curr permutation
    // push newPerm into perms
    // for each ele in arr, make a new arr by removing the ele from arr
    // add the removed element to the new Perm
    // call helper function again with newArr, newPerm and perms
    
    let permutations = [];
    
    function _getPermutations(arr, currPerm, permutations){
        if(!arr.length && newPerm.length){
            permutations.push(newPerm)
        } else{
            for (let i = 0; i < arr.length; i++) {
                // use concat because we don't want to mutate arrays
                let newArr = arr.slice(0,i).concat(arr.slice(i+1));
                let newPerm = currPerm.concat([arr[i]]);
                _getPermutations(newArr,newPerm,permutations)
            }
        }
    }

    _getPermutations(arr, [], permutations);
    return permutations;
}
