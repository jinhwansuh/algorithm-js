const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = input[0];

const factorial = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

for (let i = 1; i <= K; i++) {
  const array = input[i].split(' ');
  const a = parseInt(array[0]);
  const b = parseInt(array[1]);
  const answer = factorial(b) / (factorial(a) * factorial(b - a));
  console.log(Math.round(answer));
}
