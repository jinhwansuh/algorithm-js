const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const array = input.split('-').map((str) =>
    str
      .split('+')
      .map((el) => parseInt(el))
      .reduce((acc, curr) => acc + curr, 0)
  );

  return 2 * array[0] - array.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(input));
