
class MaxHeap:
	def __init__(self):
		self.heap = []


    def get_max(self):
        if len(self.heap):
            return self.heap[0]
		

	def insert(self, item):	
		self.heap.append(item)
		self.bubble_up()

		
	def bubble_up(self):
        index = len(self.heap) - 1
		parent_index = int((index-1)/2)
		
		while parent_index >= 0 and self.heap[parent_index] < self.heap[index]:
            self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
			
            index=parent_index
			parent_index = (int)((index-1)/2)
			

    def remove(self):
        if not len(self.heap): return

        max_item = self.heap[0]
        last_item = self.heap.pop()

        if len(self.heap):
            self.heap[0] = last_item
            self.sink_down()

        return max_item
        		

	def sink_down(self):
        idx = 0
        swap = idx

        while True:
            left_child_idx = 2 * idx + 1
            right_child_idx = 2 * idx + 1

            if left_child_idx < len(self.heap) and self.heap[left_child_idx] > self.heap[idx]:
                swap = left_child_idx

            if right_child_idx < len(self.heap) and self.heap[right_child_idx] > self.heap[swap]:
                swap = right_child_idx

            if idx != swap:
                self.heap[idx], self.heap[swap] = self.heap[swap], self.heap[idx]
                idx = swap
            else:
                break
									
			
	def heapsort(self):
	
		for i in range(0,self.size+1):
			temp = self.heap[0]
			print("%d " % temp)
			self.heap[0] = self.heap[len(self.heap)-i]
			self.heap[len(self.heap)-i] = temp
			self.sink_down(0,len(self.heap)-i-1)
			
			
if __name__ == "__main__":

	heap = Heap()
	heap.insert(10)
	heap.insert(-20)
	heap.insert(0)
	heap.insert(2)
	heap.insert(4)
	heap.insert(5)
	heap.insert(6)
	heap.insert(7)
	heap.insert(20)
	heap.insert(15)
	
	heap.heapsort()
