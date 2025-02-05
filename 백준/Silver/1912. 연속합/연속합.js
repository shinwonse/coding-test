const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map(Number);

  // dp로 푸는게 좋을 것 같음
  const dp = Array(n).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  console.log(Math.max(...dp));
}

solution(input);
