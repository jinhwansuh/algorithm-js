const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

const stack = [];
const answer = [];

for (const input of array) {
  let [command, number] = input.trim().split(' ');
  number = parseInt(number);
  switch (command) {
    case 'push':
      stack.push(number);
      break;
    case 'pop':
      const popped = stack.pop();
      answer.push(!popped ? -1 : popped);
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case 'top':
      answer.push(stack[stack.length - 1] || -1);
      break;

    default:
      break;
  }
}

console.log(answer.join('\n'));
