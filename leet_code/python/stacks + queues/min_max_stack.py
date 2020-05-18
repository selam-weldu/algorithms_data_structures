
class MinMaxStack:
	def __init__(self):
		self.minValues = [float("inf")]
		self.maxValues = [float("-inf")]
		self.stack = []


    def peek(self):
    	if len(self.stack):
			return self.stack[-1]


    def pop(self):
        if len(self.stack):
			removed = self.stack.pop()
			if removed == self.minValues[-1]:
				self.minValues.pop()
			if removed == self.maxValues[-1]:
				self.maxValues.pop()
			
			return removed


    def push(self, number):
        minValue = self.minValues[-1]
		maxValue = self.maxValues[-1]
		
		if number >= maxValue:
			self.maxValues.append(number)
		if number <= minValue:
			self.minValues.append(number)
		self.stack.append(number)


    def getMin(self):
        if len(self.minValues) > 1:
			return self.minValues[-1]


    def getMax(self):
        if len(self.maxValues) > 1:
			return self.maxValues[-1]
