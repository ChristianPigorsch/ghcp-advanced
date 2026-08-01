import { calculateFibonacci } from './fibonacci.js';
import readline from 'node:readline';
function handleInput(raw) {
    const n = parseInt(raw, 10);
    if (isNaN(n) || n < 0) {
        console.error('Please provide a non-negative integer as input.');
        process.exitCode = 1;
        return;
    }
    const result = calculateFibonacci(n);
    console.log(`The Fibonacci number at position ${n} is ${result}.`);
}
const arg = process.argv[2];
if (arg !== undefined) {
    handleInput(arg);
}
else {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Enter the index n (non-negative integer): ', (answer) => {
        handleInput(answer);
        rl.close();
    });
}
