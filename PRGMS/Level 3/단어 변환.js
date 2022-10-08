function solution(begin, target, words) {
  const set = new Set();

  const queue = [[begin, 0]];

  while (queue.length > 0) {
    const [next, count] = queue.shift();
    if (next === target) {
      return count;
    }

    words.forEach((word) => {
      if (set.has(word)) return;
      let change = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== next[i]) change++;
      }
      if (change === 1) {
        queue.push([word, count + 1]);
        set.add(word);
      }
    });
  }

  return 0;
}
