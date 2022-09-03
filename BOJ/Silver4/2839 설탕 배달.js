const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let num = parseInt(input);

  let count = 0;

  while (1) {
    num;
    if (num % 5 === 0) {
      count += num / 5;
      break;
    }
    num -= 3;
    if (num < 0) {
      count = -1;
      break;
    }
    count++;
    if (num === 0) break;
  }
  return count;
}

console.log(solution(input));
