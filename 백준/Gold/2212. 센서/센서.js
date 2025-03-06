const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const K = Number(input[1]);
  const sensors = input[2].split(' ').map(Number).sort((a, b) => a - b);

  if (K >= N) {
    console.log(0);
    return;
  }

  const distances = [];
  for (let i = 1; i < N; i++) {
    distances.push(sensors[i] - sensors[i - 1]);
  }

  distances.sort((a, b) => b - a);
  const minSum = distances.slice(K - 1).reduce((sum, d) => sum + d, 0);

  console.log(minSum);
}

solution(input);