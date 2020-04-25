# O(row*col) time and space
def riverSizes(matrix):
    sizes = []


    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == 1:
                sizes.append(count(matrix, row, col))

	return sizes

def count(matrix, row,col):
	if(row < 0 or row >= len(matrix) or col < 0 or col >= len(matrix[0]) or matrix[row][col] == 0):
		return 0

	matrix[row][col] = 0

	return 1 + count(matrix, row+1,col) + count(matrix,row-1,col) + count(matrix,row,col+1) + count(matrix,row,col-1)
