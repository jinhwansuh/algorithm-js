const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const alphaArray = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z='];

for (const alpha of alphaArray) {
  if (input.length > 0) {
    input = input.split(alpha).join('9');
  }
}

console.log(input.length);
