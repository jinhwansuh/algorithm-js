const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const array = input.map((data) => parseInt(data.trim()));
  array;
  const stack = [];

  for (const a of array) {
    if (a === 0) {
      stack.pop();
    } else {
      stack.push(a);
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(input));
