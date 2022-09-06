const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const dp = [0, 1, 3];

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }

  return dp[input];
}

console.log(solution(parseInt(input)));
