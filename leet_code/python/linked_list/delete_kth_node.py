# O(n) time | O(1) space
def removeNthFromEnd(head, k):
        if not head:
            return head

        fast = slow = head
        for _ in range(k):
            fast = fast.next

        if fast is None:
            if not head.next:
                del head
                return
            head.val = head.next.val
            head.next = head.next.next
            return head

        while fast.next:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return head
