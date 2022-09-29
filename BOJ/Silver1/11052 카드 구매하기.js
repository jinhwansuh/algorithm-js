const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.split(' ').map((el) => parseInt(el, 10));
const N = parseInt(K);

function solution(input) {
  const dp = Array.from({ length: N + 1 }, () => 0);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + input[j - 1]);
    }
  }
  return dp[N];
}

console.log(solution(input));
