import { calculateFibonacci } from './fibonacci.js';
const input = parseInt(process.argv[2], 10);
if (isNaN(input) || input < 0) {
    console.error('Please provide a non-negative integer as input.');
    process.exit(1);
}
const result = calculateFibonacci(input);
console.log(`The Fibonacci number at position ${input} is ${result}.`);
