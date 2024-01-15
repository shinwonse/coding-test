const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const wines = [];
  for (let i = 1; i <= n; i++) {
    wines.push(Number(input[i]));
  }
  let dp = Array(n).fill(0);
  dp[0] = wines[0];
  dp[1] = wines[0] + wines[1];
  dp[2] = Math.max(wines[0] + wines[1], wines[0] + wines[2], wines[1] + wines[2]);
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]);
  }
  return dp[n - 1];
}

const answer = solution(input);
console.log(answer);
