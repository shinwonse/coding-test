const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const roads = input[1].split(' ').map(Number);
  const oils = input[2].split(' ').map(Number);

  let minPrice = oils[0];
  let totalCost = 0;

  for (let i = 0; i < N - 1; i++) {
    minPrice = Math.min(minPrice, oils[i]);
    totalCost += minPrice * roads[i];
  }

  console.log(totalCost);
}

solution(input);