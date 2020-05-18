class MyQueue:

    def __init__(self):
        self.inputStack = []
        self.outputStack = []

    def push(self, x: int) -> None:
        self.inputStack.append(x)

    def pop(self) -> int:
        if len(self.outputStack):
            return self.outputStack.pop()

        while len(self.inputStack):
            self.outputStack.append(self.inputStack.pop())

        return self.outputStack.pop()

    def peek(self) -> int:
        if len(self.outputStack):
            return self.outputStack[-1]
        else:
            return self.inputStack[0]

    def empty(self) -> bool:
        if not len(self.inputStack) and not len(self.outputStack):
            return True
        else:
            return False
