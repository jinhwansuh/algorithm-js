const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, nArray, M, mArray] = input;

const nNumber = nArray.trim().split(' ');
const set = new Set();
for (const n of nNumber) {
  set.add(n);
}

const mNumber = mArray.trim().split(' ');
for (const m of mNumber) {
  console.log(set.has(m) ? 1 : 0);
}
