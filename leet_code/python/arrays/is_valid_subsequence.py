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



def isValidSubsequence2(array1, sequence1):
    seqIdx = 0
	for value in array1:
		if sequence1[seqIdx] == value:
			seqIdx += 1
		if seqIdx == len(sequence1):
			return True
	return seqIdx == len(sequence1)
