class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        if not A or len(A) < 1:
            return []

        i = 0
        for j in range(len(A)):
            if A[j] % 2 == 0:
                A[i], A[j] = A[j], A[i]
                i += 1
        return A
