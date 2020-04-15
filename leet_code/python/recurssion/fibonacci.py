# O(n) time | O(1) space
def getNthFib(n):
    if n == 1:
        return 0
	if n == 1:
	    return 1

	fib_arr = [0, 1]
	for i in range(0, n-2, 1):
		next_fib = fib_arr[0] + fib_arr[1]
		fib_arr[0] = fib_arr[1]
		fib_arr[1] = next_fib
	return fib_arr[1]


# O(2^n) time | O(n) time
def getNthFib(n):
    if n == 1:
        return 0
	if n == 2:
	    return 1
	return getNthFib(n-1) + getNthFib(n-2)
