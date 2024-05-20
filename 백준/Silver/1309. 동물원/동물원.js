const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 2 * N 배열에 사자를 배치하는 경우의 수가 몇 가지인지 구하는 문제
const solution = (input) => {
  
  const n = Number(input[0]);
  const dp = [];
  dp[0] = 0;
  dp[1] = 3;
  dp[2] = 7;
  dp[3] = 17;

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  return dp[n];
}

const answer = solution(input);
console.log(answer);
