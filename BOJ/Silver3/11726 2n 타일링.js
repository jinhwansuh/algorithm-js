const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const number = parseInt(input);
  const array = Array.from({ length: number + 1 }).fill(0);
  array[1] = 1;
  array[2] = 2;

  for (let i = 3; i <= number; i++) {
    array[i] = (array[i - 1] + array[i - 2]) % 10007;
  }

  return array[number];
}

console.log(solution(input));
