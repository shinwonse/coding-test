const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]); // 목표 합
  const n = Number(input[1]); // A의 길이
  const A = input[2].split(" ").map(Number);
  const m = Number(input[3]); // B의 길이
  const B = input[4].split(" ").map(Number);

  const aSum = [];
  const bSum = [];

  // 1️⃣ A 배열의 모든 부분합 저장
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += A[j];
      aSum.push(sum);
    }
  }

  // 2️⃣ B 배열의 모든 부분합 저장
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = i; j < m; j++) {
      sum += B[j];
      bSum.push(sum);
    }
  }

  // 3️⃣ aSum은 그대로 사용, bSum을 정렬
  bSum.sort((a, b) => a - b);

  let count = 0;

  // 4️⃣ 투 포인터 사용: aSum의 값 + bSum에서 찾기
  for (const x of aSum) {
    const target = T - x;

    // 이분 탐색으로 bSum에서 target의 개수 찾기
    const lowerBound = findLowerBound(bSum, target);
    const upperBound = findUpperBound(bSum, target);
    count += upperBound - lowerBound;
  }

  console.log(count);
}

// 🔍 이분 탐색: lowerBound (target 이상인 첫 번째 인덱스)
function findLowerBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

// 🔍 이분 탐색: upperBound (target 초과인 첫 번째 인덱스)
function findUpperBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

solution(input);