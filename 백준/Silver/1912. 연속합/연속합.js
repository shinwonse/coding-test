const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < n; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  console.log(globalMax);
}

solution(input);