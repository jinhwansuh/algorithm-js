const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(a) {
  let count = 0;
  const binary = a.toString(2);

  for (const d of binary) {
    if (d === '1') {
      count++;
    }
  }
  return count;
}

console.log(solution(input));
