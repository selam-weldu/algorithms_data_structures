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
    if (!l1) return l2;
    if (!l2) return l1;

    let mergedList = new ListNode(0);
    let current = mergedList;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = new ListNode(l1.val);
            l1 = l1.next;
        } else if (l1.val > l2.val) {
            current.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        current = current.next;
    }

    if (!l1) current.next = l2;
    if (!l2) current.next = l1;

    return mergedList.next;
};