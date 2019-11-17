def rotate_matrix(matrix):
    
    n = len(matrix)
    for layer in range(n // 2):

        start, end = layer, n - 1 - layer
        for i in range(start, end):
            offset = i - start
            # save top
            top = matrix[layer][i]
            left = matrix[end - offset][layer]
            bottom = matrix[end][end - offset]
            right = matrix[i][end]

            temp = top
            top = left
            left = bottom
            bottom = right
            right = temp

            # # left -> top
            # matrix[layer][i] = matrix[end - offset][layer]

            # # bottom -> left
            # matrix[end - offset][layer] = matrix[end][end - offset]

            # # right -> bottom
            # matrix[end][end - offset] = matrix[i][end]

            # # top -> right
            # matrix[i][end] = top
    return matrix


def rotate(matrix):
    n = len(matrix)
    for layer in range(n // 2):
        end = n - 1 - layer
        for i in range(layer, end):
            q = n - 1 - i

            top = matrix[layer][i]
            matrix[layer][i] = matrix[q][layer]
            matrix[q][layer] = matrix[end][q]
            matrix[end][q] = matrix[i][end]
            matrix[i][end] = top
    return matrix



def rotate2(matrix):
    n = len(matrix)
    for i in range(n//2):
        for j in range(i, n-1-i):
            temp = matrix[i][j]
            matrix[i][j] = matrix[n-1-j][i]
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j]
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i]
            matrix[j][n-1-i] = temp
    return matrix


data = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ]


print(rotate2(data))
# [
#     [21, 16, 11, 6, 1],
#     [22, 17, 12, 7, 2],
#     [23, 18, 13, 8, 3],
#     [24, 19, 14, 9, 4],
#     [25, 20, 15, 10, 5]
# ]
