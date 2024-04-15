const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");


// 1. 두 개의 단어가 같은 종류의 문자로 이루어져 있다.
// 2. 같은 문자는 같은 개수 만큼 있다.
// 같은 구성이거나, 한 문자를 더하거나 빼서 같은 구성이 되면 서로 비슷한 단어
// 비슷한 단어가 모두 몇 개인지 구하라.
const solution = (input) => {
  const n = Number(input[0]);
  const standard = input[1].split('');
  const validation = input.slice(2).map(v => v.split(''));
  let answer = 0;

  validation.forEach((v) => {
    const start = [...standard];

    if (v.length < start.length) {
      for (let i = 0; i < v.length; i++) {
        if (start.includes(v[i])) {
          const idx = start.indexOf(v[i]);
          start.splice(idx, 1);
        }
      }
      if (start.length === 1) {
        answer++;
      }
    } else {
      for (let i = 0; i < start.length; i++) {
        if (v.includes(start[i])) {
          const idx = v.indexOf(start[i]);
          v.splice(idx, 1);
        }
      }
      if (v.length === 1 || v.length === 0) {
        answer++;
      }
    }
  });

  return answer;
}

const answer = solution(input);
console.log(answer);
