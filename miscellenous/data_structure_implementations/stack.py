class Stack:
    def __init__(self):
        self.stack = []
        self.length = 0
    
    def append(self,data):
        self.stack.append(data)
        self.length += 1
        return self


    def pop(self):
        if self.isEmpty(): return

        data = self.stack.pop()
        self.length -= 1
        return data


    def isEmpty(self):
        return self.stack == []


    def size(self):
        return self.length


# stack = Stack()

# stack.append(1)
# stack.append(2)
# stack.append(3)
# stack.append(4)
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())
# print(stack.size())
# print(stack.pop())
# print(stack.size())
