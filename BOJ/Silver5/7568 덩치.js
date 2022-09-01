const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

const rate = [];

for (let i = 0; i < K; i++) {
  let count = 1;
  const [aWeight, aHeight] = array[i].split(' ').map((data) => parseInt(data));

  for (let j = 0; j < K; j++) {
    if (i === j) continue;
    const [bWeight, bHeight] = array[j]
      .split(' ')
      .map((data) => parseInt(data));
    if (aWeight < bWeight && aHeight < bHeight) {
      count++;
    }
  }
  rate.push(count);
}

console.log(rate.join(' '));
