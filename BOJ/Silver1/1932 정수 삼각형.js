const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.map((arr) =>
  arr
    .trim()
    .split(' ')
    .map((el) => parseInt(el, 10))
);

// dfs 시간 초과
{
  function solution(input) {
    let max = 0;
    let last = input.length - 1;

    function dfs(sum, level, index) {
      if (level === last) {
        max = Math.max(
          sum + input[level][index],
          sum + input[level][index + 1],
          max
        );
        return;
      }

      dfs(sum + input[level][index], level + 1, index);
      dfs(sum + input[level][index + 1], level + 1, index + 1);
    }

    dfs(input[0][0], 1, 0);

    return max;
  }

  console.log(solution(input));
}
