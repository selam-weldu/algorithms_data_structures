# O(n) time and space
def isPalindrome(self, head):
        if not head or not head.next:
            return True

        fast = slow = head
        stack = []

        # find middle node
        while fast and fast.next:
            fast = fast.next.next
            stack.append(slow.val)
            slow = slow.next

        if fast:  # odd-length so ignore middle node
            slow = slow.next

        while slow:
            node = stack.pop()
            if node != slow.val:
                return False
            slow = slow.next

        return True

# O(n) time | O(1) space
def reverse(self, node):
    prev = next_node = None
    current = node

    while current:
        prev = current.next

        current.next = next_node

        next_node = current
        current = prev

    return next_node

def isPalindrome2(self, head):
    if not head or not head.next:
        return True
    
    fast = slow = head
    # find middle node
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
        
        
    if fast: # odd-length so ignore middle node
        slow = slow.next
        
    second_head = self.reverse(slow)
    fast = head
    
    while second_head:
        if second_head.val != fast.val:
            return False
        second_head, fast = second_head.next, fast.next
        
    return True
