const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  // n <= 1 <= 100
  // dp[i][j] = i자리수의 j로 끝나는 계단수의 개수
  const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));
  dp[1][0] = 0;
  for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = 0;
      if (j > 0) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= 1000000000;
    }
  }
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result += dp[n][i];
    result %= 1000000000;
  }
  console.log(result)
}

solution(input);
