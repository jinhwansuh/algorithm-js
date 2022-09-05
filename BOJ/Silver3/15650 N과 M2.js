const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const visited = Array.from({ length: M + 1 }).fill(false);
const array = [];

function dfs(count, prev) {
  if (count === M) {
    console.log(array.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i] && prev < i) {
      array.push(i);
      visited[i] = true;
      prev = i;
      dfs(count + 1, prev);
      array.pop();
      visited[i] = false;
    }
  }
}

dfs(0, 0);
