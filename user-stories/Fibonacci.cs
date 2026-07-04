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
        return FibRecursive(n);
    }
}
