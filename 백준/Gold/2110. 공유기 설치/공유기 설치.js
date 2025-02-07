const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, C] = input[0].split(" ").map(Number);
  const homes = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  let left = 1; // 가능한 최소 거리 (1 이상)
  let right = homes[N - 1] - homes[0]; // 가능한 최대 거리 (가장 먼 두 집 간 거리)
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 현재 시도할 간격
    if (canInstall(mid)) {
      answer = mid; // 설치가 가능하면 더 큰 간격을 시도
      left = mid + 1;
    } else {
      right = mid - 1; // 설치가 불가능하면 간격을 줄임
    }
  }

  console.log(answer);

  function canInstall(distance) {
    let count = 1; // 첫 번째 집에 공유기 설치
    let lastInstalled = homes[0]; // 마지막으로 공유기를 설치한 집의 위치

    for (let i = 1; i < N; i++) {
      // 다음 집과 마지막 설치 위치 간 거리가 현재 거리 이상일 때 설치
      if (homes[i] - lastInstalled >= distance) {
        count++;
        lastInstalled = homes[i];
      }
    }

    // 공유기 설치 개수가 C개 이상이면 true 반환
    return count >= C;
  }
}

solution(input);
