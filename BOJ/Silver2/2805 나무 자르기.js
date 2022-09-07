const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [front, next] = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, target] = front.split(' ').map((el) => parseInt(el));
const input = next
  .split(' ')
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);

function solution(input) {
  let start = 0;
  let end = input[input.length - 1];
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let a of input) {
      let rest = a - mid;
      if (rest > 0) sum += rest;
    }
    if (sum >= target) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution(input));
