const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(' ').map(Number);

  const dp = new Array(N).fill(1); // 최소한 자기 자신 1개는 LIS가 된다.

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
}

solution(input);