const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const array = input[1].split(" ").map(Number);

  // 구간을 나누기 위한 최대-최소 차이의 범위
  let left = 0;
  let right = Math.max(...array) - Math.min(...array);
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canDivide(array, N, M, mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
}

// 각 구간에서 최댓값 - 최솟값 <= mid를 만족하는지
function canDivide(array, N, M, maxDiff) {
  let count = 1;
  let minVal = array[0];
  let maxVal = array[0];

  for (let i = 1; i < N; i++) {
    minVal = Math.min(minVal, array[i]);
    maxVal = Math.max(maxVal, array[i]);

    if (maxVal - minVal > maxDiff) {
      count++;
      minVal = array[i];
      maxVal = array[i];
    }
  }

  return count <= M;
}

solution(input);
