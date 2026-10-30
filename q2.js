function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, (n) => n * 2);
const squared = applyOperation(numbers, (n) => n * n);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
