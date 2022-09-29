const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = array.map((arr) => arr.split(' ').map((el) => parseInt(el, 10)));

function solution(input) {
  const n = parseInt(N);

  let answer = 1;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let visited = [];

  function bfs([i, j], target) {
    const queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let s = 0; s < 4; s++) {
        const nx = x + dx[s];
        const ny = y + dy[s];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (!visited[nx][ny] && input[nx][ny] > target) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  for (let k = 1; k < 101; k++) {
    visited = Array.from({ length: n }, () => Array(n).fill(false));
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (input[i][j] > k && !visited[i][j]) {
          bfs([i, j], k);
          cnt++;
        }
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(solution(input));
