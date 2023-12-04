const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const T = Number(input[0]);
  const pibo = [0, 1];
  while (pibo[pibo.length - 1] < 1e9) {
    pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
  }
  let answer = '';

  for (let i = 1; i <= T; i += 1) {
    let N = Number(input[i]);
    const result = [];
    let idx = pibo.length - 1;
    while (N > 0) {
      if (N >= pibo[idx]) {
        N -= pibo[idx];
        result.push(pibo[idx]);
      }
      idx -= 1;
    }
    for (let i = result.length - 1; i >= 0; i -= 1) {
      answer += `${result[i]} `;
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
