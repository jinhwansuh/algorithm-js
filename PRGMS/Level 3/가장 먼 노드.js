function solution(n, edge) {
  let answer = 0;
  const array = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const edg of edge) {
    graph[edg[0]].push(edg[1]);
    graph[edg[1]].push(edg[0]);
  }

  function bfs(node) {
    array[node] += 1;
    const queue = [node];
    while (queue.length > 0) {
      const next = queue.shift();
      for (const a of graph[next]) {
        if (array[a]) continue;
        array[a] = array[next] + 1;
        queue.push(a);
      }
    }
  }

  bfs(1);

  const max = Math.max(...array);

  for (const a of array) {
    if (a === max) answer++;
  }

  return answer;
}
