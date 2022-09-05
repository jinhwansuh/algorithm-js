const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((data) => parseInt(data));

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

for (let i = M; i <= N; i++) {
  isPrime(i) && console.log(i);
}
