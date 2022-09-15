const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
N = parseInt(N.trim());
const input = array.map((arr) =>
  arr
    .trim()
    .split(' ')
    .map((el) => parseInt(el))
);

function solution(input) {
  input.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let i = 0;
  let count = 0;
  let endTime = 0;

  while (i < N) {
    const [start, end] = input[i++];
    if (start >= endTime) {
      endTime = end;
      count++;
    }
  }

  return count;
}

console.log(solution(input));
