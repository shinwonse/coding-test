const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const t = Number(input[0]);
  for (let i = 0; i < t; i += 1) {
    const n = Number(input[i + 1]);
    let dp = Array.from({ length: n + 1 }, () => 0);
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    dp[5] = 2;
    for (let j = 6; j <= n; j += 1) {
      dp[j] = dp[j - 2] + dp[j - 3];
    }
    console.log(dp[n]);
  }
}

solution(input);
