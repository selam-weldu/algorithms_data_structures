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

	result = 1

	for node in get_neighbors(matrix, row,col):
		result += count(matrix, node[0],node[1])

	return result

	# return 1 + count(matrix,row+1,col) + count(matrix,row-1,col) + count(matrix,row,col+1) + count(matrix,row,col-1)

def get_neighbors(matrix, row,col):
	dr = [1, -1,0,0]
	dc = [0, 0,1,-1]

	neighbors = []

	for i in range(len(dr)):
		r = row + dr[i]
		c = col + dc[i]

		if r < 0 or c < 0:
		    continue
		if r >= len(matrix) or c >= len(matrix[0]): continue
		if matrix[r][c] == 0:
		    continue
			
		neighbors.append([r, c])

	return neighbors
