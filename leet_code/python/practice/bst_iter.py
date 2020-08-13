class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class ExtendedBSTIterator(object):

    def __init__(self, root):
        self.root = root
        self.stack = []

        self.buffer = []
        self.buffer_ptr = -1

    def __init__(self, root):
        self.root = root
        self.stack = []

        self.buffer = []
        self.buffer_ptr = -1

    def hasNext(self):
        if self.buffer_ptr < len(self.buffer)-1:
            return True

        return self.root or self.stack

    def next(self):
        if self.buffer_ptr < len(self.buffer)-1:
            self.buffer_ptr += 1
            return self.buffer[self.buffer_ptr]

        while self.root:
            self.stack.append(self.root)
            self.root = self.root.left

        self.root = self.stack.pop()
        ret = self.root.val
        self.root = self.root.right

        self.buffer.append(ret)
        self.buffer_ptr += 1

        return ret

    def hasPrev(self):
        return self.buffer_ptr > 0

    def prev(self):
        self.buffer_ptr -= 1
        return self.buffer[self.buffer_ptr]


seven = Node(7)
three = Node(3)
fifteen = Node(15)
nine = Node(9)
twenty = Node(20)

seven.left = three
seven.right = fifteen
fifteen.left = nine
fifteen.right = twenty


it = BSTIT(seven)

assert it.hasNext()
assert not it.hasPrev()

assert 3 == it.next()
assert it.hasNext()
assert not it.hasPrev()

assert 7 == it.next()
assert it.hasNext()
assert it.hasPrev()

assert 3 == it.prev()
assert 7 == it.next()
assert 9 == it.next()
assert 15 == it.next()
assert it.hasPrev()
assert 9 == it.prev()
assert 15 == it.next()
assert 20 == it.next()
assert not it.hasNext()
assert it.hasPrev()
assert 15 == it.prev()
assert it.hasNext()