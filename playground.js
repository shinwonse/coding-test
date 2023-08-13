const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input);
  const dp = Array.from({ length: N + 1 }, () => 0);
  for (let i = 1; i <= N; i += 1) {
    dp[i] = [];
  }
  dp[1] = [BigInt(0), BigInt(1)];

  for (let i = 2; i <= N; i += 1) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }
  return dp[N].reduce((acc, cur) => acc + cur).toString();
}

console.log(solution(input));
