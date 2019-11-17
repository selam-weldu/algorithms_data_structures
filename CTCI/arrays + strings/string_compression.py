# outside loop iterates through length of string
# init two pointer, equal
# inner loop, 
# loops while the two pointer are identical
# increments count, and second pointer
# outside inner loop, add string[i] and count to result array

# O(n) time, space
def stringCompression(string):
    if not len(string): return ''

    compressed_string = []
    counter = 1

    for i in range(1, len(string)):
        if string[i] != string[i-1]:
            compressed_string.append(string[i-1]+str(counter))
            counter = 0

        counter += 1

    compressed_string.append(string[-1] + str(counter))

    return min(string, ''.join(compressed_string), key=len)
    


def stringCompression2(string):
    if not len(string):
        return ''

    compressed_string = []
    counter = 1

    for i in range(1, len(string)):
        if len(''.join(compressed_string)) > len(string):
            return string

        if string[i] != string[i-1]:
            compressed_string.append(string[i-1]+str(counter))
            counter = 0

        counter += 1

    compressed_string.append(string[-1] + str(counter))

    return ''.join(compressed_string)


# print(stringCompression('aabcccccaaa'))  # a2b1c5a3
# print(stringCompression('abcdef'))  # abcdef
