class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
        if not lists:
            return

        while len(lists) > 1:
            listOne = lists.pop()
            listTwo = lists.pop()
            merged = mergeTwoLists(listOne, listTwo)
            lists.append(merged)
        return lists[0]

def mergeTwoLists(l1, l2):
    dummy = current = ListNode(0)

    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
            current = current.next
        elif l2.val <= l1.val:
            current.next = l2
            l2 = l2.next
            current = current.next

    current.next = l1 or l2

    return dummy.next
