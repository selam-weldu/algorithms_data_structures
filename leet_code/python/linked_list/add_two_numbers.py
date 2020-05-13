class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


# O(n) time, O(n) space n: length of larger number
def addTwoNumbers(self, l1, l2):
        if (not l1 and l2) or (not l2 and l1):
            return l1 or l2

        carry = running_sum = 0
        result = head = ListNode(0)

        while l1 or l2:
            running_sum = carry
            if l1:
                running_sum += l1.val
                l1 = l1.next
            if l2:
                running_sum += l2.val
                l2 = l2.next
            carry = running_sum // 10
            result.next = ListNode(running_sum % 10)
            result = result.next

        if carry:
            result.next = ListNode(carry)

        return head.next
