# O(n) time
# O(n) time
# O(1) space
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        slow = head
        fast = head

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

            if fast == slow:
                slow = head

                while fast != slow:
                    fast = fast.next
                    slow = slow.next

                return slow
        return None

