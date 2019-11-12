class Queue:
    def __init__(self):
        self.queue = []
        self.length = 0


    def enqueue(self,data):
        self.queue.append(data)
        self.length += 1
        return


    def dequeue(self):
        if self.isEmpty(): return

        data = self.queue[0]
        del self.queue[0]
        self.length -= 1
        return data


    def isEmpty(self):
        return self.queue == []


    def size(self):
        return self.length


# queue = Queue()

# queue.enqueue(1)
# queue.enqueue(2)
# queue.enqueue(3)
# queue.enqueue(4)
# print(queue.dequeue())
# print(queue.dequeue())
# print(queue.size())
# print(queue.dequeue())
# print(queue.dequeue())
# print(queue.dequeue())
# print(queue.size())
