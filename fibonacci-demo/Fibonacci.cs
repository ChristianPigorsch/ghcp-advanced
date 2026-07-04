// returns the nth Fibonacci number
public class FibonacciCalculator
{
    private const int BASE_THRESHOLD = 1;

    private static int FibRecursive(int n)
    {
        if (n <= BASE_THRESHOLD)
        {
            return n;
        }
        return FibRecursive(n - 1) + FibRecursive(n - 2);
    }

    public static int Fib(int n)
    {
       // Validate input
        if (n < 0)
            throw new ArgumentException("n must be non-negative", nameof(n));
        return FibRecursive(n);
    }
}
