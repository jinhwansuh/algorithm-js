const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [N, numbers, counts] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  const order = ['+', '-', '*', '/'];
  const array = numbers.split(' ').map((el) => parseInt(el, 10));
  const cnt = counts.split(' ').map((el) => parseInt(el, 10));
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  const count = [];
  for (let i = 0; i < cnt.length; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      count.push(order[i]);
    }
  }

  const visited = Array.from({ length: count.length }, () => false);

  function dfs(k, sum) {
    if (k === count.length) {
      const a = calculate(sum);
      max = Math.max(a, max);
      min = Math.min(a, min);
      return;
    }

    for (let i = 0; i < count.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(k + 1, sum + count[i] + array[k + 1]);
        visited[i] = false;
      }
    }
  }

  function calculate(string) {
    const split = string.split('');
    let sum = parseInt(split[0], 10);

    for (let i = 1; i < split.length; i++) {
      const number = parseInt(split[i + 1], 10);
      if (split[i] === '+') {
        sum = sum + number;
      } else if (split[i] === '-') {
        sum = sum - number;
      } else if (split[i] === '*') {
        sum = sum * number;
      } else if (split[i] === '/') {
        sum =
          sum < 0
            ? Math.floor(Math.abs(sum) / number) * -1
            : Math.floor(sum / number);
      }
      i += 1;
    }
    return sum;
  }

  dfs(0, array[0]);

  return `${max}\n${min}`;
}

console.log(solution());

// 시간 초과 이유 모르겠다
