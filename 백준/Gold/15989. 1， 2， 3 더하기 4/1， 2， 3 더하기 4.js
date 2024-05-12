const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 합을 나타내는 방법, 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
// 합을 이루고 있는 수의 순서만 다른 것은 같은 것으로 취급한다.
const solution = (input) => {
  const t = Number(input[0]);
  const dp = Array.from(Array(10001), () => Array(4).fill(0));

  dp[1][1] = 1;
  dp[2][1] = 1;
  dp[2][2] = 1;
  dp[3][1] = 1;
  dp[3][2] = 1;
  dp[3][3] = 1;

  for (let i = 4; i <= 10000; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  for (let i = 1; i <= t; i++) {
    const n = Number(input[i]);
    console.log(dp[n][1] + dp[n][2] + dp[n][3]);
  }
}

solution(input);
