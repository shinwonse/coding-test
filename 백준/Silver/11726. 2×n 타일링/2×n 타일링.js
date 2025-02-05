const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const MOD = 10007;

  const dp = Array(n + 1).fill(0);

  dp[1] = 1;
  if (n > 1) {
    dp[2] = 2;
  }

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  console.log(dp[n]);
}

solution(input);
