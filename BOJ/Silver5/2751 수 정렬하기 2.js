const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

array
  .map((data) => parseInt(data))
  .sort((a, b) => a - b)
  .forEach((num) => console.log(num));
