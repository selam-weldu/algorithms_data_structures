/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    let current = head,
        newNext = null,
        prev;

    while (current) {
        prev = current.next;
        current.next = newNext;

        newNext = current;
        current = prev;
    }

    // newNext would be new head
    return newNext;
}


// recursively

function reverseList(head){
    if(head){
        return reverse(head,null)
    } else{
        return head;
    }
}

function reverse(node, prev){
    let newHead = node;

    if(node.next){
        // recursive call to tail
        newHead = reverse(node.next,node);
    } 
    // reverse from tail all the way up to head
    node.next = prev;
    

    return newHead;
}