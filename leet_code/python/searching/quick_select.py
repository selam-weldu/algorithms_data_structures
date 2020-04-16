# best:O(n) time
# worst:O(n^2) time
# O(1) space


def quickselect(array, k):
	if len(array) < k or not array:
		return -1
	position = k - 1
    return quickSort(array,position,0,len(array)-1)

def quickSort(array,k,start,end):
	while start <= end:
		pivot = Partition(array,start,end)

		if pivot == k:
			return array[pivot]

		if pivot < k:
			start = pivot + 1
		else:
			end = pivot - 1
	return array[k]
	

def Partition(array,start,end):

	mid = (start + end) // 2
	swap(array,mid,end)
	
	i = start
	for j in range(start,end,1):
		if array[j] <= array[end]:
			swap(array,i,j)
			i += 1
	swap(array,i,end)
		
	return i
		
def swap(array,i,j):
	array[i], array[j] = array[j],array[i]
	
	
	
	
	
	
	
	
	
	
	
