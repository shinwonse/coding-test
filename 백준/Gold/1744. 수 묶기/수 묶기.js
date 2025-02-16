const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 양수는 큰 수끼리 곱하고
// 음수는 작은 수끼리 곱하고
function solution(input) {
  const N = Number(input[0]);
  const array = input.slice(1).map(Number);

  const positives = array.filter((number) => number > 0).sort((a, b) => a - b);
  const negatives = array.filter((number) => number <= 0).sort((a, b) => a - b);

  let positiveSum = 0;
  let negativeSum = 0;

  while (positives.length) {
    if (positives.length >= 2) {
      const [a, b] = positives.splice(-2);
      positiveSum += Math.max(a * b, a + b);
    } else {
      positiveSum += positives.pop();
    }
  }

  while (negatives.length) {
    if (negatives.length >= 2) {
      const [small, large] = negatives.splice(0, 2);
      negativeSum += small * large;
    } else {
      negativeSum += negatives.pop();
    }
  }

  console.log(negativeSum + positiveSum);
}

solution(input);