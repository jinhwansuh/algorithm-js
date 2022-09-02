const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((data) => parseInt(data));

let sum = 0;
let min = 10001;

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    sum += i;
    if (i < min) min = i;
  }
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
if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
