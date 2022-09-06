const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let [K, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
K = parseInt(K);

function solution(input) {
  const dp = Array.from({ length: K + 1 }).fill(0);

  for (let i = 0; i < K; i++) {
    const [day, pay] = input[i];
    if (i + day > K) continue;
    dp[i] = dp[i] + pay;
    for (let j = i + day; j < K; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }
  return Math.max(...dp);
}

const array = input.map((el) => el.split(' ').map((el) => parseInt(el)));

console.log(solution(array));
