const array = Array.from({ length: 10001 })
  .fill()
  .map((v, i) => i);

for (let i = 1; i < 10001; i++) {
  const splitI = i.toString().split('');
  let next = splitI.reduce((acc, curr) => acc + parseInt(curr), 0) + i;
  if (next <= 10000) array[next] = 0;
}

for (const a of array) {
  if (a) console.log(a);
}
