# O(n^2) time and space
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        
        a, col_index = 0, len(matrix[0]) - 1
        b, row_index = 0, len(matrix) - 1
        
        number = 1
        
        while a <= col_index and b <= row_index:
            for i in range(a, col_index + 1):
                matrix[a][i] = number
                number += 1
            b += 1
            
            for i in range(b, row_index + 1):
                matrix[i][col_index] = number
                number += 1
            col_index -= 1
                
            if b <= row_index:
                for i in reversed(range(a,col_index+1)):
                    matrix[row_index][i] = number
                    number += 1
                row_index -= 1
                    
            if a <= col_index:
                for i in reversed(range(b, row_index+1)):
                    matrix[i][a] = number
                    number += 1
                a += 1
        return matrix
        