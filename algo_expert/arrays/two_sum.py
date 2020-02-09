# O(n) time and space


def twoNumberSum(array, targetSum):
    matches = set()

    for num in array:
        match = targetSum - num
        if match in matches:
            return [num, match]
        else:
            matches.add(num)

    return []
