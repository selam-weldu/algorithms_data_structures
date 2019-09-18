
/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
    if (!head) return null;

    let prev, next = null,
        current = head;

    while (current.next) {
        prev = current.next;
        current.next = next;
        current.prev = prev;

        next = current;
        current = prev;
    }

    current.next = current.prev;
    current.prev = null;
    head = current;
    return head;

}