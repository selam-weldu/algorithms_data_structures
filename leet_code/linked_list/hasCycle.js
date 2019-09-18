
function hasCycle(head) {
    // have two pointer
    // second pointer is two nodes ahead
    // loop while there is a second and second.next
    // inside loop check if first === second, return true if equal
    if (!head || !head.next || !head.next.next) return false;

    let first = head.next;
    let second = head.next.next;

    while(first !== second){
        first = first.next;
        if(!second.next || !second.next.next) return false;
        second = second.next.next;
    }
 
    return true;
}



