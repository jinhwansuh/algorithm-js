const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const array = input[1].split(' ').map((el) => parseInt(el));

const prefix = [0];
array.forEach((el, index) => {
  prefix[index + 1] = prefix[index] + el;
});

const output = [];
for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map((el) => parseInt(el));
  output.push(prefix[b] - prefix[a - 1]);
}

console.log(output.join('\n'));
