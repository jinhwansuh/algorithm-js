const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const graph = {};
  for (const a of input) {
    const [node, left, right] = a.split(' ');
    graph[node] = [left, right];
  }
  let answer = '';
  function preorder(node) {
    if (node === '.') return;
    const [left, right] = graph[node];
    answer += node;
    preorder(left);
    preorder(right);
  }
  function inorder(node) {
    if (node === '.') return;
    const [left, right] = graph[node];
    inorder(left);
    answer += node;
    inorder(right);
  }
  function postorder(node) {
    if (node === '.') return;
    const [left, right] = graph[node];
    postorder(left);
    postorder(right);
    answer += node;
  }

  preorder('A');
  answer += '\n';
  inorder('A');
  answer += '\n';
  postorder('A');

  return answer;
}

console.log(solution(array));
