const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const distances = input[1].split(' ').map(BigInt);
  const prices = input[2].split(' ').map(BigInt);

  let minPrice = prices[0]; // 첫 번째 주유소의 가격
  let totalCost = BigInt(0); // BigInt로 선언

  for (let i = 0; i < N - 1; i++) {
    minPrice = minPrice < prices[i] ? minPrice : prices[i]; // 최소값 갱신
    totalCost += minPrice * distances[i]; // 최소 가격으로 거리만큼 주유
  }

  console.log(totalCost.toString()); // BigInt는 문자열로 출력해야 함
}

solution(input);