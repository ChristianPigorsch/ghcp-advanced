// returns the nth Fibonacci number
export function fib(n: number): number {
    // return the nth Fibonacci number
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)  ;
    // return fib(n - 1) + fib(n - 2);
    
}
