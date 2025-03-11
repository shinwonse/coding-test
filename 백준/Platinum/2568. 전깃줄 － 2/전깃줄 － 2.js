const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  let wires = input.slice(1).map(line => line.split(' ').map(Number));

  // 1️⃣ A 전봇대를 기준으로 정렬
  wires.sort((a, b) => a[0] - b[0]);

  // 2️⃣ LIS 탐색을 위한 배열 준비
  let B = wires.map(wire => wire[1]);  // B 전봇대의 전깃줄 배열
  let lis = []; // LIS를 저장할 배열
  let index = new Array(N).fill(0); // LIS 인덱스를 저장할 배열

  function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return left;
  }

  // 3️⃣ LIS 찾기 + 인덱스 저장
  for (let i = 0; i < N; i++) {
    let pos = lowerBound(lis, B[i]); 
    if (pos === lis.length) lis.push(B[i]);
    else lis[pos] = B[i];
    index[i] = pos; // 현재 값이 LIS의 어디에 포함되는지 저장
  }

  // 4️⃣ LIS에 포함된 요소 개수 계산
  let lisLength = lis.length;
  console.log(N - lisLength); // 제거해야 하는 전깃줄 개수

  // 5️⃣ LIS에 포함된 전깃줄을 찾기
  let lisSet = new Set();
  let targetIndex = lisLength - 1;

  for (let i = N - 1; i >= 0; i--) {
    if (index[i] === targetIndex) {
      lisSet.add(wires[i][0]); // A 전봇대의 번호를 저장
      targetIndex--;
    }
  }

  // 6️⃣ 제거해야 하는 전깃줄 출력
  let removeWires = [];
  for (let i = 0; i < N; i++) {
    if (!lisSet.has(wires[i][0])) {
      removeWires.push(wires[i][0]);
    }
  }
  
  removeWires.sort((a, b) => a - b);
  console.log(removeWires.join('\n'));
}

solution(input);