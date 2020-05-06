# O(ws + nm*8s) time | O(nm + ws) space
class Trie:
	def __init__(self):
		self.root = {}

	def add(self, word):
		current = self.root
		for letter in word:
			if letter not in current:
				current[letter] = {}
			current = current[letter]
		current['*'] = word


def boggleBoard(board, words):
    trie = Trie()


for word in words:
		trie.add(word)

	final_words = {}
	visited = [[False for col in row] for row in board]

	for row in range(len(board)):
		for col in range(len(board[0])):
			explore(row, col,board,trie.root,visited,final_words)
	return list(final_words.keys())


def explore(row, col,board,trie_node,visited,final_words):
	letter = board[row][col]
	if visited[row][col] or (letter not in trie_node):
		return

	visited[row][col] = True
	trie_node = trie_node[letter]
	if '*' in trie_node:
		final_words[trie_node["*"]] = True

	neighbors = getNeighbors(board, row,col)
	for neighbor in neighbors:
		explore(neighbor[0], neighbor[1],board,trie_node,visited,final_words)

	visited[row][col] = False


def getNeighbors(matrix, row, col):
    dr = [1, -1, 0, 0, 1, -1, 1, -1]
    dc = [0, 0, 1, -1, -1, 1, 1, -1]

    neighbors = []
    for i in range(len(dr)):
        r = row + dr[i]
        c = col + dc[i]

        if r < 0 or c < 0:
            continue
        if r >= len(matrix) or c >= len(matrix[0]):
            continue

        neighbors.append((r, c))

    return neighbors
