const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const times = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let totalTime = 0;
  let accumulatedTime = 0;

  for (let i = 0; i < N; i++) {
    accumulatedTime += times[i];
    totalTime += accumulatedTime;
  }

  console.log(totalTime);
}

solution(input);
