def sudoku2(board):
    for i in range(9):
         row = set ()
         column = set ()
         block = set ()
         row_cube = 3 * (i//3)
         column_cube = 3 * (i%3)
         for j in range(9):
            if board[i][j]!='.' and board[i][j] in row:
                return False
            row.add(board[i][j])
            if board[j][i]!='.' and board[j][i] in column:
                return False
            column.add(board[j][i])
            rc= row_cube + (j//3)
            cc = column_cube + (j%3)
            if board[rc][cc] in block and board[rc][cc]!='.':
                return False
            block.add(board[rc][cc])
    return True
