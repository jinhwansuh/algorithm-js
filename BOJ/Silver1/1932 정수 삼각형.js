const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.map((arr) =>
  arr
    .trim()
    .split(' ')
    .map((el) => parseInt(el, 10))
);

{
  function solution(input) {
    for (let i = 1; i < input.length; i++) {
      for (let j = 0; j <= i; j++) {
        let prev;
        if (j === 0) prev = input[i - 1][j];
        else if (j === i) prev = input[i - 1][j - 1];
        else prev = Math.max(input[i - 1][j - 1], input[i - 1][j]);
        input[i][j] += prev;
      }
    }

    return Math.max(...input[input.length - 1]);
  }
  console.log(solution(input));
}

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
