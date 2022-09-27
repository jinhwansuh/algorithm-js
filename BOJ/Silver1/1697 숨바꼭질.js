const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

function solution([N, K]) {
  const visited = Array.from({ length: 100001 }, () => 0);

  function bfs([i, j]) {
    const queue = [[i, j]];

    while (queue.length > 0) {
      const [x, count] = queue.shift();
      if (visited[x]) continue;
      visited[x] = true;

      if (x === K) {
        return count;
      }
      if (x * 2 <= 100000) {
        queue.push([x * 2, count + 1]);
      }
      if (x + 1 <= 100000) {
        queue.push([x + 1, count + 1]);
      }
      if (x - 1 >= 0) {
        queue.push([x - 1, count + 1]);
      }
    }
  }

  return bfs([N, 0]);
}

console.log(solution([N, K]));
