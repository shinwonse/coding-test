const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const arrayA = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const arrayB = input[2].split(' ').map(Number).sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    answer += arrayA[i] * arrayB[i];
  }

  console.log(answer);
}

solution(input);