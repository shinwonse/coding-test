const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let answer = 0;

  let [N, K] = input.shift().split(" ").map((v) => Number(v));
  const coins = input;
  while (K !== 0) {
    for (let i = N - 1; i >= 0; i-= 1) {
      if (K >= coins[i]) {
        K -= coins[i];
        answer += 1;
        break;
      }
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
