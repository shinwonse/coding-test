const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const distances = input[1].split(" ").map((v) => Number(v));
  let costs = input[2].split(" ").map((v) => Number(v));

  let minCost = costs[0];
  for (let i = 0; i < N; i += 1) {
    minCost = Math.min(minCost, costs[i]);
    costs[i] = minCost;
  }

  let answer = 0;
  for (let i = 0; i < N - 1; i += 1) {
    answer += costs[i] * distances[i];
  }

  return answer;
};

const answer = solution(input);
console.log(answer);
