class Node(object):
    def __init__(self,val):
        self.val = val
        self.next = None

class SinglyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def length(self):
        return self.size

    # O(1)
    def insertAtStart(self,val):
        newNode = Node(val)

        if not self.head:
            self.head = self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.size += 1
        return self

    # O(1)
    def insertAtEnd(self,val):
        newNode = Node(val)

        if not self.tail:
            self.head = self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.size += 1
        return self

    # O(n)
    def remove(self):
        if not self.tail: return

        current = self.head
        previous = None

        while current.next:
            previous = current
            current = current.next 
        
        if previous:
            previous.next = current.next
            self.tail = previous
        else:
            self.head = current.next

        current.next = None
        self.size -= 1
        return current.val

    def traverse(self):
        if not self.tail: return []
        nodes = []
        current = self.head
        while current:
            nodes.append(current.val)
            current = current.next 
        return nodes


linkList = SinglyLinkedList()

# linkList.insertAtStart(1)
# linkList.insertAtStart(2)
# linkList.insertAtStart(3)
# linkList.insertAtStart(4)
# linkList.insertAtStart(5)
linkList.remove()
# linkList.insertAtEnd(1)
# linkList.insertAtEnd(2)
# linkList.insertAtEnd(3)
# linkList.insertAtEnd(4)
# linkList.insertAtEnd(5)

print(linkList.length())
        
print(linkList.traverse())
