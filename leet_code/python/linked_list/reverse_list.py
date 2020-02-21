# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# O(n) time, O(1) space
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        current = head
        new_next = None

        while current:
            prev = current.next

            current.next = new_next

            new_next = current
            current = prev

        return new_next
