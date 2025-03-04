const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const ropes = input.slice(1).map(Number).sort((a, b) => b - a);

  let maxWeight = 0;

  for (let i = 0; i < N; i++) {
    maxWeight = Math.max(maxWeight, ropes[i] * (i + 1));
  }

  console.log(maxWeight);
}

solution(input);