# O(nm) time and space
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not len(matrix): return []
        result = []
        
        row_index, col_index = len(matrix) - 1, len(matrix[0]) - 1
        a , b = 0 , 0
        
        while a <= col_index and b <= row_index:
            for i in range(a, col_index + 1):
                result.append(matrix[a][i])
            b += 1
            
            for i in range(b, row_index + 1):
                result.append(matrix[i][col_index])
            col_index -= 1
            
            if b <= row_index:
                for i in reversed(range(a, col_index + 1)):
                    result.append(matrix[row_index][i])
                row_index -= 1
                
    
            if a <= col_index:
                for i in reversed(range(b, row_index + 1)):
                    result.append(matrix[i][a])
                a += 1
        
        return result