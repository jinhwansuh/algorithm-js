const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = input[0];
const array = input[1].split(' ');
let count = 0;

for (const num of array) {
  if (isPrime(parseInt(num))) count++;
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

console.log(count);
