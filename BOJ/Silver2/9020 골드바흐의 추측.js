const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [T, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.map((el) => parseInt(el));

function solution(input) {
  let prev = 0;
  let next = 0;

  for (let i = 2; i <= input / 2; i++) {
    if (isPrime(i) && isPrime(input - i)) {
      if (i > prev) {
        prev = i;
        next = input - i;
      }
    }
  }

  return `${prev} ${next}`;
}
function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

input.forEach((el) => {
  console.log(solution(el));
});
