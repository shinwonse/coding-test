const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  let answer = 0;

  const dfs = (x, arr) => {
    if (arr.length === 2) {
      answer = Math.max(answer, x);
      return;
    }
    for (let i = 1; i < arr.length - 1; i++) {
      const temp = arr.slice();
      temp.splice(i, 1);
      dfs(x + temp[i - 1] * temp[i], temp);
    }
  }
  dfs(0, arr);
  return answer;
};

const answer  = solution(input);
console.log(answer);
