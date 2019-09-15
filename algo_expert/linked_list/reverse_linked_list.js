function reverseLinkedList(head) {
    //   returns this.head
    // 	set this.head as current
    // 	init newNext and prev
    // 	since head is now tail, newNext starts off as null
    //  and prev starts of as current.next
    // 	loop through list until the end
    // 	at each iteration, set prev to be current.next
    // 	connect current to its newNext
    // 	reassign current and newNext, newNext = current, current = prev
    // 	set final node as this.head and return it

    let current = head,
        newNext = null,
        prev;

    while (current) {
        prev = current.next;
        current.next = newNext;

        newNext = current;
        current = prev;
    }

    return newNext;
}