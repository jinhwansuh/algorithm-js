const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
const [A, ...array] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(array) {
  let [N, money] = A.split(' ').map((a) => parseInt(a));
  const reverseMoney = array.map((el) => parseInt(el)).reverse();
  let count = 0;

  for (const coin of reverseMoney) {
    if (money % coin === 0) {
      count += money / coin;
      break;
    } else {
      const quotient = Math.floor(money / coin);
      count += quotient;
      money -= coin * quotient;
    }
  }
  return count;
}

console.log(solution(array));
