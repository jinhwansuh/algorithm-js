function solution(n, works) {
  works.sort((a, b) => b - a);

  let time = n;
  while (time > 0) {
    for (let idx = 0; idx < works.length; idx++) {
      works[idx]--;
      time--;
      if (works[idx] >= works[idx + 1] || time <= 0) break;
    }
  }
  return works.reduce((acc, current) => acc + (current > 0 && current ** 2), 0);
}
