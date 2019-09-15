function detectCycle(head) {
    if (!head || !head.next || !head.next.next) return null

    let first = head.next;
    let second = head.next.next;


    while (first !== second) {
        first = first.next
        // if `second.next` or `second.next.next` does NOT exist, it's not a cycle.
        if (!second.next || !second.next.next) return null
        second = second.next.next
    }
    first = head

    while (second !== first) {
        second = second.next
        first = first.next
    }

    return first
}