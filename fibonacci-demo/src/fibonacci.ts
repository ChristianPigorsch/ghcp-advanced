export function calculateFibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp: number;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Recursive implementation for demonstration
export function calculateFibonacciRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    return calculateFibonacciRecursive(n - 1) + calculateFibonacciRecursive(n - 2);
}