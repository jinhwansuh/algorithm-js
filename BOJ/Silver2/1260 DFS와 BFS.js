const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, start] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
const graph = Array.from({ length: N + 1 })
  .fill()
  .map(() => []);

input.forEach((el) => {
  const [a, b] = el.split(' ').map((data) => parseInt(data));

  graph[a].push(b);
  graph[b].push(a);
});

graph.forEach((el) => {
  el.sort((a, b) => a - b);
});

const visited = Array.from({ length: N + 1 }).fill(false);
const answer1 = [];
const answer2 = [];

function DFS(node) {
  if (visited[node]) return;
  visited[node] = true;
  answer1.push(node);
  for (const a of graph[node]) {
    if (!visited[a]) DFS(a);
  }
}
DFS(start);

visited.fill(false);

function BFS(node) {
  const queue = [node];
  while (queue.length > 0) {
    const next = queue.shift();
    if (visited[next]) continue;
    visited[next] = true;
    answer2.push(next);
    for (const a of graph[next]) {
      if (!visited[a]) queue.push(a);
    }
  }
}

BFS(start);

console.log(answer1.join(' '));
console.log(answer2.join(' '));
