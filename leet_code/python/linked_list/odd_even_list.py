# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# O(n) time, O(1) space
class Solution:
    def oddEvenList(self, L: ListNode) -> ListNode:
        if not L: return L
        even_dummy_head, odd_dummy_head = ListNode(0), ListNode(0)
        e, o = even_dummy_head, odd_dummy_head

        current, nodes, turn = L, [e,o], 0
        while current:
            nodes[turn].next = current
            nodes[turn] = nodes[turn].next
            current = current.next 
            turn ^= 1
        nodes[1].next = None
        nodes[0].next = odd_dummy_head.next

        return even_dummy_head.next