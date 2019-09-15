
function hasCycle(head) {
    // have two pointer
    // second pointer is two nodes ahead
    // loop while there is a second and second.next
    // inside loop check if first === second, return true if equal
    if (!head || !head.next) return false;

    let first = head;
    let second = head.next;

    while(first !== second){
        first = first.next;
        if(!second || !second.next) return false;
        second = second.next.next;
    }

    // while (second && second.next) {
    //     if (first === second) return true
    //     first = first.next;
    //     second = second.next.next;
    // }

    return true;
}

// short and sweet
function hasCycle(head) {

    while (head) {
        if (head.visited) { return true }
        head.visited = true
        head = head.next
    }

    return false
};


