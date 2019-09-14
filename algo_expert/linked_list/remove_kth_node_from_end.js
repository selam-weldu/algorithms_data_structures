function removeKthNodeFromEnd(head, k) {
    let first = head,
        second = head;

    let count = 0;
    // gotcha, careful not to mess up count
    while (count < k) {
        second = second.next;
        ++count;
    }

    // remove first node
    if (!second) {
        head.value = head.next.value;
        head.next = head.next.next;
        return
    }

    while (second.next) {
        first = first.next;
        second = second.next;
    }

    first.next = first.next.next;
    return head;
}