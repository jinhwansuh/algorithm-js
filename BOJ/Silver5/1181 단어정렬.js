const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = input.shift();

const newArray = [...new Set([...input])];

newArray.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});

newArray.forEach((data) => console.log(data));
