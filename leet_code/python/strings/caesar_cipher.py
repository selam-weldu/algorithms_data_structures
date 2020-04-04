# have an alphabet list
# make sure key is not too large
# fix wrap arounds

# O(n) space and time
def caesarCipherEncryptor(string, key):
    new_key = key % 26


    new_string = []
    alphabet = list("abcdefghijklmnopqrstuvwxyz")

    for letter in string:
            new_string.append(getNewLetter(alphabet, letter, new_key))

    return "".join(new_string)


def getNewLetter(alphabet, letter, key):
	new_position = (alphabet.index(letter) + key) % 26
	return alphabet[new_position]
