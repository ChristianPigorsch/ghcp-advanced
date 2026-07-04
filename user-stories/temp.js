// returns the nth Fibonacci number
const BASE_THRESHOLD = 1;

function fibRecursive(n) {
    if (n <= BASE_THRESHOLD) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

export function fib(n) {
    return fibRecursive(n);
}
