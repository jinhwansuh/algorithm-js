const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = input[0];
let count = 0;

for (let i = 1; i <= K; i++) {
  const word = input[i];
  const array = [];
  let prev = word[0];
  array.push(prev);
  let length = 1;
  for (let j = 1; j < word.length; j++) {
    if (word[j] === prev) {
      length++;
    } else {
      prev = word[j];
      if (array.includes(prev)) break;
      array.push(prev);
      length++;
    }
  }

  if (word.length === length) count++;
}

console.log(count);
