/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
*/

var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    
    let merged = new ListNode();
    // remember to set a pointer to the head of the list
    let head = merged;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            merged.next = l1;
            l1 = l1.next;
        } else {
            merged.next = l2;
            l2 = l2.next;
        }
        merged = merged.next;
    }

    if (l1) merged.next = l1;
    if (l2) merged.next = l2;

    // make sure to return starting from second node
    return head.next; 
};