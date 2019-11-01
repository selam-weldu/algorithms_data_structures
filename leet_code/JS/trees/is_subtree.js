// edge cases: if only one node is null
// traverse until s and t have equal values
// pass values to another function that checks all nodes in both trees
// and return true or false

// 
var isSubtree = function (s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;
    

    if (s.val === t.val && isEqual(s, t)) {
        return true;
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t);

};

function isEqual(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    
    if (t1.val === t2.val) {
        return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
    }
    return false;
}

