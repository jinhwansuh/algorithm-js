const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(N, 10);
const input = array.map((el) => parseInt(el, 10));

function solution(input) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  if (n === 1) return input[0];
  if (n === 2) return input[0] + input[1];

  dp[1] = input[0];
  dp[2] = input[0] + input[1];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + input[i - 2] + input[i - 1],
      dp[i - 2] + input[i - 1],
      dp[i - 1]
    );
  }
  return dp[n];
}

console.log(solution(input));
