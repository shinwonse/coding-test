const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const operatorInput = input[2].split(' ').map(Number);
  const operators = {
    0: (a, b) => (a + b),
    1: (a, b) => (a - b),
    2: (a, b) => (a * b),
    3: (a, b) => {
      if (a < 0) {
        return -Math.floor(-a / b);
      }
      return Math.floor(a / b);
    },
  };
  let max = -Infinity;
  let min = Infinity;

  const dfs = (depth, temp) => {
    if (depth === N) {
      max = Math.max(max, temp);
      min = Math.min(min, temp);
      return;
    }
    for (let i = 0; i < 4; i += 1) {
      if (operatorInput[i] === 0) continue;
      operatorInput[i] -= 1;
      const nextTemp = operators[i](temp, arr[depth]);
      dfs(depth + 1, nextTemp);
      operatorInput[i] += 1;
    }
  }

  dfs(1, arr[0]);
  return `${max}\n${min}`;
};

const answer  = solution(input);
console.log(answer);
