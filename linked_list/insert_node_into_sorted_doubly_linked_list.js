// Complete the sortedInsert function below.
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
function sortedInsert(head, data) {
    // if empty or one node lists are already sorted
    // edges: before first element, after last element
    // loop until list is empty or a node is larger than data
    // check which case ended the loop,
    // it's because a larger number was found
    // add newNode before that node
    // else, push node to the end

    let newNode = new DoublyLinkedListNode(data);
    
    if (!head) {
        head = newNode;
        return head;
    } else {
        let current = head;
        while (current) {
            if (current.data > data) {
                if (current === head) {
                    newNode.next = head;
                    head.prev = newNode;
                    head = newNode;
                } else {
                    newNode.next = current;
                    current.prev.next = newNode;
                    newNode.prev = current.prev.next;
                    current.prev = newNode;
                }
                return head;
            }

            if (current.next == null) {
                current.next = newNode;
                newNode.prev = current;
                return head;
            }

            current = current.next;
        }
    }
}
