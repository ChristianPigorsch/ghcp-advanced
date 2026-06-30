# Fibonacci Function Documentation

## Overview
This TypeScript code implements a recursive function to calculate the nth Fibonacci number.

## Function: `fib(n: number): number`

### Purpose
Calculates and returns the nth number in the Fibonacci sequence, where each number is the sum of the two preceding ones.

### Parameters
- `n: number` - The index position in the Fibonacci sequence (0-based)

### Returns
- `number` - The nth Fibonacci number

### How It Works
The function uses recursive calls to compute the Fibonacci sequence:

1. **Base Case**: If `n ≤ 1`, it returns `n` directly
   - `fib(0)` returns `0`
   - `fib(1)` returns `1`

2. **Recursive Case**: For `n > 1`, it returns the sum of the two previous Fibonacci numbers
   - `fib(n) = fib(n - 1) + fib(n - 2)`

### Example Sequence
```
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
...
```

### Notes
- This implementation uses a naive recursive approach
- Performance consideration: This approach has exponential time complexity O(2^n), making it inefficient for large values of `n`
- For production use, consider implementing memoization or iterative approaches for better performance
