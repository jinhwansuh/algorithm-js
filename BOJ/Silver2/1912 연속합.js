const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const array = input.split(' ').map((el) => parseInt(el));

function solution(input) {
  const dp = [];

  for (let i = 0; i < input.length; i++) {
    dp[i] = input[i];
    if (dp[i] < dp[i - 1] + input[i]) {
      dp[i] = dp[i - 1] + input[i];
    }
  }

  return Math.max(...dp);
}

console.log(solution(array));
