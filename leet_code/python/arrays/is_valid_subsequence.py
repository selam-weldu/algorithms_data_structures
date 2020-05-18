# O(n) time | O(1) space
def isValidSubsequence(array, sequence):
	if len(sequence) > len(array):
		return False
    arrIdx = 0
	seqIdx = 0
	
	while seqIdx < len(sequence):
		while arrIdx < len(array) and (array[arrIdx] != sequence[seqIdx]):
			arrIdx += 1
		if arrIdx >= len(array) and seqIdx < len(sequence):
			return False
		arrIdx += 1
		seqIdx += 1
		
	return True