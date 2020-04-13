# time: O(row+col) | space: O(1)
def searchInSortedMatrix(matrix, target):
    if not matrix:
        return [-1, -1]


    row = 0
    col = len(matrix[0]) - 1

    while row < len(matrix) and col >= 0:
            potential = matrix[row][col]
            if potential == target:
                return [row, col]
            elif potential < target:
                row += 1
            else:
                col -= 1
    return [-1, -1]
