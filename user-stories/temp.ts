// returns the nth Fibonacci number
const BASE_THRESHOLD = 1;

function fibRecursive(n: number): number {
    if (n <= BASE_THRESHOLD) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

export function fib(n: number): number {
    return fibRecursive(n);
}
