const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const array = input.slice(1).map(Number);

  const positives = [];
  const negatives = [];
  let sum = 0;

  for (const num of array) {
    if (num > 1) positives.push(num);
    else if (num <= 0) negatives.push(num);
    else sum += num; // **1은 곱하는 것보다 더하는 게 유리하므로 바로 sum에 추가**
  }

  // **양수는 큰 수부터 묶어 곱해야 최댓값**
  positives.sort((a, b) => b - a);
  // **음수는 작은 수부터 묶어 곱해야 최댓값**
  negatives.sort((a, b) => a - b);

  // **양수 그룹 계산**
  for (let i = 0; i < positives.length; i += 2) {
    if (i + 1 < positives.length) sum += positives[i] * positives[i + 1];
    else sum += positives[i]; // **남은 값이 있다면 그냥 더하기**
  }

  // **음수 그룹 계산**
  for (let i = 0; i < negatives.length; i += 2) {
    if (i + 1 < negatives.length) sum += negatives[i] * negatives[i + 1];
    else sum += negatives[i]; // **남은 값이 있다면 그냥 더하기**
  }

  console.log(sum);
}

solution(input);