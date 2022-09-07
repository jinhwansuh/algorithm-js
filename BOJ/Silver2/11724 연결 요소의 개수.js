const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map((el) => parseInt(el));
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map((el) => parseInt(el));
  graph[a].push(b);
  graph[b].push(a);
}

function solution() {
  const visited = Array.from({ length: N + 1 }, () => false);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }
  function dfs(node) {
    if (visited[node]) return;
    visited[node] = true;
    for (const next of graph[node]) {
      if (!visited[next]) dfs(next);
    }
  }

  return count;
}

console.log(solution());
