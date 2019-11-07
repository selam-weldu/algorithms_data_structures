function getNthFib(n) {
    //  fib(1) = 0
    // 	fib(2) = 1
    // 	fib(3) = 1
    // 	fib(4) = 2
    // 	fib(5) = 3
    // 	fib(6) = 5

    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n > 2) {
        return getNthFib(n - 1) + getNthFib(n - 2)
    }
}