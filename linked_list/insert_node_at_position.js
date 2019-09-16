// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    if (!head && position !== 0) return null;

    let newNode = new SinglyLinkedListNode(data);

    if (position === 0) {
        newNode.next = head;
        head = newNode;
        return head;
    }

    let counter = 0,
        current = head;

    while (counter !== position - 1) {
        current = current.next;
        ++counter;
    }


    newNode.next = current.next;
    current.next = newNode;

    return head;

}