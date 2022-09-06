const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const dp = [0, 1, 2, 3, 5, 8];

  for (let i = 5; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }
  return dp[input];
}

console.log(solution(parseInt(input)));
