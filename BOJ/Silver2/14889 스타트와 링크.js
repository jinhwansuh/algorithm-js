const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
N = parseInt(N);

function solution(input) {
  const graph = Array.from({ length: N }, () => []);
  const visited = Array.from({ length: N }, () => false);

  for (let i = 0; i < input.length; i++) {
    const array = input[i].split(' ').map((el) => parseInt(el));
    array.forEach((el) => graph[i].push(el));
  }
  let min = 100000001;

  function dfs(count, who) {
    if (count === N / 2) {
      const startArray = [];
      const linkArray = [];
      let startSum = 0;
      let linkSum = 0;

      for (let i = 0; i < N; i++) {
        if (visited[i]) startArray.push(i);
        else linkArray.push(i);
      }

      for (let i = 0; i < startArray.length; i++) {
        for (let j = i + 1; j < startArray.length; j++) {
          startSum +=
            graph[startArray[i]][startArray[j]] +
            graph[startArray[j]][startArray[i]];
          linkSum +=
            graph[linkArray[i]][linkArray[j]] +
            graph[linkArray[j]][linkArray[i]];
        }
      }
      min = Math.min(min, Math.abs(startSum - linkSum));
      return;
    }

    for (let i = who; i < N; i++) {
      visited[i] = true;
      dfs(count + 1, i + 1);
      visited[i] = false;
    }
  }
  dfs(0, 0);

  return min;
}

console.log(solution(input));
