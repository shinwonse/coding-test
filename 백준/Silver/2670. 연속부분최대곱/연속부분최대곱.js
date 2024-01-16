const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }
  let dp = new Array(n + 1).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], dp[0] * arr[1]);
  for (let i = 2; i < n; i += 1) {
    dp[i] = Math.max(arr[i], dp[i - 1] * arr[i]);
  }
  console.log(Math.max(...dp).toFixed(3));
}

solution(input);
