const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

const newArray = array.map((el) => parseInt(el)).sort((a, b) => b - a);

for (let i = 10; i <= newArray[0]; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

array.map((el) => parseInt(el)).forEach((data) => console.log(dp[data]));
