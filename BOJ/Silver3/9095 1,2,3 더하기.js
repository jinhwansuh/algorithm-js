const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

const memoArray = Array.from({ length: 11 }).fill(0);

memoArray[1] = 1;
memoArray[2] = 2;
memoArray[3] = 4;

for (let i = 4; i < 11; i++) {
  memoArray[i] = memoArray[i - 1] + memoArray[i - 2] + memoArray[i - 3];
}

array.forEach((el) => console.log(memoArray[parseInt(el)]));
