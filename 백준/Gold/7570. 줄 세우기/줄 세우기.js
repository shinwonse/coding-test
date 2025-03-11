const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

/**
 * 줄 서있는 어린이 중 한 명을 선택하여 제일 앞이나 제일 뒤로 보낸다
 * 번호 순서대로 줄을 세우기 위한 최소
 */
function solution(input) {
  const N = Number(input[0]);
  const children = input[1].split(' ').map(Number);
  const dp = new Array(N + 1).fill(0);

  let maxSeq = 0;

  for (const num of children) {
    dp[num] = dp[num - 1] + 1;
    maxSeq = Math.max(maxSeq, dp[num]);
  }

  console.log(N - maxSeq);
}

solution(input);