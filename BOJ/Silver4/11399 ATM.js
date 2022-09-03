const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const accum = [];
  const array = input
    .trim()
    .split(' ')
    .map((data) => parseInt(data))
    .sort((a, b) => a - b);
  const sum = array.reduce((acc, curr) => {
    const sum = acc + curr;
    accum.push(acc + curr);
    return sum;
  }, 0);

  return accum.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(input));
