const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(' ').map(Number);

  const dp1 = new Array(N).fill(1);
  const dp2 = new Array(N).fill(1);

  // LIS 계산 (앞에서부터)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] < numbers[i]) {
        dp1[i] = Math.max(dp1[i], dp1[j] + 1);
      }
    }
  }

  // LDS 계산 (뒤에서부터)
  for (let i = N - 1; i >= 0; i--) {
    for (let j = N - 1; j > i; j--) {
      if (numbers[j] < numbers[i]) {
        dp2[i] = Math.max(dp2[i], dp2[j] + 1);
      }
    }
  }

  // 바이토닉 수열 길이 최대값 찾기
  let maxLen = 0;
  for (let i = 0; i < N; i++) {
    maxLen = Math.max(maxLen, dp1[i] + dp2[i] - 1);
  }

  console.log(maxLen);
}

solution(input);