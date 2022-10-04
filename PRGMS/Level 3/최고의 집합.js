function solution(n, s) {
  if (n > s) return [-1];
  let center = (s / n) % 2 === 0 ? s / n : Math.floor(s / n);
  const array = Array.from({ length: n }).fill(center);

  let sum = array.reduce((acc, curr) => acc + curr, 0);

  for (let i = array.length - 1; i >= 0; i--) {
    if (sum === s) return array;
    array[i] = array[i] + 1;
    sum++;
  }
}
