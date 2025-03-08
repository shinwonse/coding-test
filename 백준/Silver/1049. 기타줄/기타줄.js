const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let minSetPrice = Infinity;
  let minUnitPrice = Infinity;

  for (let i = 0; i < M; i++) {
    const [set, unit] = input[i + 1].split(' ').map(Number);
    minSetPrice = Math.min(minSetPrice, set);
    minUnitPrice = Math.min(minUnitPrice, unit);
  }

  // 1. 세트만 구매하는 경우 (Math.ceil 사용)
  const buyOnlyWithSet = Math.ceil(N / 6) * minSetPrice;

  // 2. 낱개로만 구매하는 경우
  const buyOnlyWithUnit = N * minUnitPrice;

  // 3. 세트 + 낱개 혼합 구매
  const buyWithSetAndUnit = Math.floor(N / 6) * minSetPrice + (N % 6) * minUnitPrice;

  console.log(Math.min(buyOnlyWithSet, buyOnlyWithUnit, buyWithSetAndUnit));
}

solution(input);