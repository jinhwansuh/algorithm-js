const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [K, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(K);
const input = array.map((arr) =>
  arr
    .trim()
    .split('')
    .map((el) => parseInt(el))
);

function solution(input) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let counts = 0;
  const array = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && input[i][j] === 1) {
        counts++;
        array.push(bfs(i, j));
      }
    }
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    let count = 1;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      visited[x][y] = true;
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (!visited[nx][ny] && input[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    return count;
  }

  return `${counts}\n${array.sort((a, b) => a - b).join('\n')}`;
}

console.log(solution(input));
