const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [A, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.map((arr) =>
  arr
    .trim()
    .split('')
    .map((el) => parseInt(el))
);
const [N, M] = A.trim()
  .split(' ')
  .map((el) => parseInt(el));

function solution(input) {
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (visited[i][j] === 0 && input[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = 1;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (input[nx][ny] === 1 && visited[nx][ny] === 0) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return visited[N - 1][M - 1];
}

console.log(solution(input));
