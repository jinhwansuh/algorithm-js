const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let [K, N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

K = parseInt(K);
const virus = Array.from({ length: K + 1 }).fill(false);

virus[1] = true;
const graph = Array.from(Array(K + 1), () => []);

array.forEach((arr) => {
  const [a, b] = arr.split(' ').map((data) => parseInt(data));
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(start) {
  virus[start] = true;

  for (const a of graph[start]) {
    if (!virus[a]) dfs(a);
  }
}

function solution() {
  dfs(1);
  return virus.reduce((acc, curr) => acc + (curr && 1), 0);
}

console.log(solution() - 1);
