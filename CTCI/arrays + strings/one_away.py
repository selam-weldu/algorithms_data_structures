# for shorter string, use dict to store char and freq counts
# iterate longer string
# if char is not in hash map, or value is zero set flag to true the first time
# if another char is not in hash map or value is zero return false
# finally return true

from collections import defaultdict

# O(n) time and space
def oneAway(str1,str2):
    if abs(len(str1) - len(str2)) > 1: return False

    if len(str1) < len(str2):
        shorter,longer = str1, str2
    else:
        shorter, longer = str2, str1

    char_count = defaultdict(int)
    for char in shorter:
        char_count[char] += 1

    found_one = False
    for char in longer:
        if char_count.get(char, 0) == 0:
            if found_one == True:
                return False
            else:
                found_one = True
        else:
            char_count[char] -= 1

    return True



data_true = [
        ('pale', 'ple'),
        ('pales', 'pale'),
        ('pale', 'bale'),
        ('paleabc', 'pleabc'),
        ('a', 'b'),
        ('', 'd'),
        ('d', 'de'),
        ('pale', 'pale'),
        ('pale', 'ple'),
        ('ple', 'pale'),
        ('pale', 'bale'),
        ('ples', 'pales'),
        ('pale', 'pkle')
    ]

data_false = [        
        ('pkle', 'pable'),
        ('pal', 'palks'),
        ('palks', 'pal'),
        ('pale', 'ble'),
        ('pale', 'bake'),
        ('pale', 'pse'),
        ('pale', 'pas'),
        ('pas', 'pale')
        ]

for string in data_false:
    print(oneAway(string[0], string[1]))