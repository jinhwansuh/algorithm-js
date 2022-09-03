const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const stack = [];

  for (const a of input) {
    if (a === '(') {
      stack.push('(');
    } else if (a === ')') {
      const pop = stack.pop();
      if (pop !== '(') return 'NO';
    }
  }
  if (stack.length === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
}

for (const input of array) {
  console.log(solution(input));
}
