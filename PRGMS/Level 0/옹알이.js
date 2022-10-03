function solution(babbling) {
  let answer = 0;
  const cans = ['aya', 'ye', 'woo', 'ma'];
  babbling.forEach((bab) => {
    let babble = bab;
    let continues = false;
    cans.forEach((can) => {
      const splitBabble = babble.split(can);
      let count = 0;
      for (let i = 0; i < splitBabble.length; i++) {
        if (splitBabble[i] === '') {
          count++;
          if (count === 3) {
            continues = true;
            return;
          }
        } else {
          count = 0;
        }
      }
      babble = splitBabble.join('');
    });

    if (!continues && babble === '') answer++;
  });

  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
