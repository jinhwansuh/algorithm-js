const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [A, B, V] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((data) => parseInt(data));

const day = Math.ceil((V - B) / (A - B));

console.log(day);
