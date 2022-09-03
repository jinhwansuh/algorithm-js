const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const num = parseInt(input);
  let count = 0;

  for (let i = 1; i <= num; i++) {
    const numArray = i.toString().split('');
    const gap = +numArray[0] - +numArray[1];

    for (let j = 0; j < numArray.length; j++) {
      if (j === numArray.length - 1) {
        count++;
        break;
      }
      if (+numArray[j] - +numArray[j + 1] === gap) continue;
      else break;
    }
  }

  return count;
}

console.log(solution(input));
