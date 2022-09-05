const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const num = input.map((data) => parseInt(data));
  const array = Array.from({ length: parseInt(K) + 1 }).fill(0);

  array[0] = num[0];
  array[1] = Math.max(num[0] + num[1], num[1]);
  array[2] = Math.max(num[0] + num[2], num[1] + num[2]);

  for (let i = 3; i <= parseInt(K); i++) {
    array[i] = Math.max(
      num[i] + array[i - 2],
      num[i] + num[i - 1] + array[i - 3]
    );
  }
  return array[parseInt(K) - 1];
}

console.log(solution(input));
