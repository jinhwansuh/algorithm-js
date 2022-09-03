const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let number = parseInt(input);
  const array = Array.from({ length: number + 1 }).fill(0);
  array[2] = 1;
  array[3] = 1;

  for (let i = 4; i < array.length; i++) {
    array[i] = array[i - 1] + 1;
    if (i % 3 === 0) {
      array[i] = Math.min(array[i], array[i / 3] + 1);
    }
    if (i % 2 === 0) {
      array[i] = Math.min(array[i], array[i / 2] + 1);
    }
  }

  return array[input];
}

console.log(solution(input));
