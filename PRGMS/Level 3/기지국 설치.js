function solution(n, stations, w) {
  let cnt = 0;
  let index = 1;
  const sum = 2 * w + 1;
  stations.forEach((station, i) => {
    if (station - w > index) {
      cnt += Math.ceil((station - w - index) / sum);
    }
    index = station + w + 1;
  });

  return cnt + Math.ceil((n - index + 1) / sum);
}
