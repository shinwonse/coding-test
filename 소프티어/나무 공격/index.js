const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * 공격을 진행한 이후 격자에 남아있는 서로 다른 환경 파괴범의 수를 구하라
 */
function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = [];
  const attacks = [];

  // 격자 초기화
  for (let i = 1; i <= n; i++) {
    const row = input[i].split(" ").map(Number);
    graph.push(row);
  }

  // 공격 구간 정보 수집
  for (let i = n + 1; i <= n + 2; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    attacks.push([from - 1, to - 1]); // 입력을 0-index로 변환
  }

  // 투사체 이동 함수
  const moveProjectiles = (from, to) => {
    for (let row = from; row <= to; row++) {
      for (let col = 0; col < m; col++) {
        if (graph[row][col] === 1) {
          // 투사체가 환경 파괴범을 만남 -> 제거
          graph[row][col] = 0;
          break; // 해당 행에서는 투사체가 더 이상 이동하지 않음
        }
      }
    }
  };

  // 각 공격을 순서대로 실행
  for (const [from, to] of attacks) {
    moveProjectiles(from, to);
  }

  // 남아있는 서로 다른 환경 파괴범의 수 계산
  let remainingCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        remainingCount++;
      }
    }
  }

  console.log(remainingCount);
}

solution(input);
