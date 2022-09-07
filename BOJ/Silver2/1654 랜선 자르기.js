const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [T, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const [K, N] = T.split(' ').map((el) => parseInt(el));
const input = array.map((el) => parseInt(el)).sort((a, b) => a - b);

function solution(input) {
  let start = 0;
  let end = input[input.length - 1];
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;

    for (const a of input) {
      count += Math.floor(a / mid);
    }

    if (count >= N) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(solution(input));
