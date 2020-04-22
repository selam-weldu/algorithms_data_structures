# O(n) time | O(1) space
def moveElementToEnd(array, toMove):
    if len(array) <= 1:
        return array

    i = 0
    j = len(array) - 1

    while i < j:
        while i < j and array[i] != toMove:
            i += 1
        while i < j and array[j] == toMove:
            j -= 1

        array[i], array[j] = array[j], array[i]
    return array
