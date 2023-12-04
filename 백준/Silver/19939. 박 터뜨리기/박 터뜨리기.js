const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let [N, K] = input[0].split(" ").map((v) => Number(v));

  let summary = 0;
  for (let i = 1; i < K + 1; i += 1) {
    summary += i;
  }
  if (summary > N) {
    return - 1;
  } else {
    N -= summary;
    if (N % K === 0) {
      return K - 1;
    } else {
      return K;
    }
  }
};

const answer = solution(input);
console.log(answer);
