const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const array = [];
const splitInput = input.split('');

for (let i = 0; i < splitInput.length - 2; i++) {
  for (let j = i + 1; j < splitInput.length - 1; j++) {
    for (let k = j + 1; k < splitInput.length; k++) {
      const first = splitInput.slice(0, j).reverse().join('');
      const mid = splitInput.slice(j, k).reverse().join('');
      const last = splitInput.slice(k).reverse().join('');

      array.push(first + mid + last);
    }
  }
}

array.sort();
console.log(array[0]);
