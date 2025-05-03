const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const n = Number(input[0]);
  const array = input[1].split(' ').map(Number);

  const dp = Array(n).fill(0);
  dp[0] = array[0];
  let maxSum = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }

  console.log(maxSum);
}

solution(input);