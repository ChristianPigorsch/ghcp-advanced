# Fibonacci Demo Project

This project demonstrates how to calculate Fibonacci numbers using TypeScript. It includes both iterative and recursive implementations of the Fibonacci calculation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd fibonacci-demo
npm install
```

## Usage

You can run the application using the following command:

```bash
npm start
```

This will execute the `index.ts` file, which handles user input and output for calculating Fibonacci numbers.

## Examples

To calculate the nth Fibonacci number, you can use the `calculateFibonacci` function from the `fibonacci.ts` file. Here are some examples:

### Iterative Example

```typescript
import { calculateFibonacci } from './fibonacci';

const n = 5;
const result = calculateFibonacci(n);
console.log(`The ${n}th Fibonacci number is ${result}`);
```

### Recursive Example

```typescript
import { calculateFibonacci } from './fibonacci';

const n = 10;
const result = calculateFibonacci(n);
console.log(`The ${n}th Fibonacci number is ${result}`);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.