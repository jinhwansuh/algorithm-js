const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const a = parseInt(input);
  let count = 0;

  for (let i = a + 1; i <= 2 * a; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let j = 0; j < input.length - 1; j++) {
  console.log(solution(input[j]));
}
