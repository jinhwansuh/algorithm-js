const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input[0]);
let k;
for (let q = 1; q < input.length; q = q + k + 1) {
  const [M, N, K] = input[q].split(' ').map((el) => parseInt(el));
  k = K;

  const graph = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [a, b] = input[q + i + 1].split(' ').map((el) => parseInt(el));
    graph[b][a] = 1;
  }

  const distance = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let count = 0;

  const bfs = (x, y) => {
    const queue = [[x, y]];

    while (queue.length > 0) {
      [currX, currY] = queue.shift();
      if (graph[currX][currY] === 0) continue;
      graph[currX][currY] = 0;
      distance.forEach(([dx, dy]) => {
        let nx = currX + dx;
        let ny = currY + dy;

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
          return;
        }
        if (graph[nx][ny]) queue.push([nx, ny]);
      });
    }
  };

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
