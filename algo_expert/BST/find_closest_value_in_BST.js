//iterative
// average: Time O(log n), space O(1)
// worst: Time O(n), space O(n)...one branch bst,like a linked list

// init closest and current variables
// loop while current !== null
// update closest
// explore next node, if current node is smaller than target
// go to the right, because the values in the left are farther away 
// than current and hence not closer in value to target
// if value is greater go right
// if node.value is equal to target return closest
function findClosestValueInBst(node, target) {
    let closest = Infinity,
        current = node;

    while (current) {
        //part one update closest
        if (Math.abs(current.value - target) < Math.abs(closest - target)) {
            closest = current.value;
        }

        // part two traverse
        if (current.value < target) {
            current = current.right;
        } else if (current.value > target) {
            current = current.left;
        } else {
            return closest;
        }
    }

    return closest;
}



//recursive
// average: Time O(log n), space O(D) D is depth
// worst: Time O(n), space O(n)...one branch bst,like a linked list

//call a helper method with an additional parameter 
// keep track of the closest value
// base case : if !node return closest
// recursive case: same as the iterative case

function findClosestValueInBst(tree, target) {
    return helper(tree, target, Infinity);
}

function helper(node, target, closest) {
    if (!node) return closest;

    if (Math.abs(node.value - target) < Math.abs(closest - target)) {
        closest = node.value;
    }

    if (node.value > target) return helper(node.left, target, closest);
    if (node.value < target) return helper(node.right, target, closest);
    if (node.value === target) return closest;
}