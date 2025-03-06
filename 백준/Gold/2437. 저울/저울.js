const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const choos = input[1].split(' ').map(Number).sort((a, b) => a - b);

  let weight = 1;
  for (let i = 0; i < N; i++) {
    if (choos[i] > weight) break;
    weight += choos[i];
  }

  console.log(weight);
}

solution(input);