const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const directions = [
  [0, 1], // 오른쪽
  [1, 0], // 아래쪽
  [0, -1], // 왼쪽
  [-1, 0], // 위쪽
];

function solution(input) {
  const T = Number(input[0]); // 테스트 케이스 개수
  let index = 1;

  for (let i = 0; i < T; i++) {
    const [M, N, K] = input[index].split(" ").map(Number); // 배추밭 크기와 배추 개수
    index++;

    // 그래프 초기화
    const graph = Array.from({ length: N }, () => Array(M).fill(0));

    // 배추 위치 입력
    for (let j = 0; j < K; j++) {
      const [x, y] = input[index].split(" ").map(Number);
      graph[y][x] = 1; // 배추가 있는 곳은 1로 표시
      index++;
    }

    // 방문 여부 배열
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    // DFS 함수 정의
    function dfs(x, y) {
      visited[y][x] = true; // 현재 위치 방문 처리

      // 네 방향 탐색
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        // 유효 범위 내에 있고, 배추가 있으며, 아직 방문하지 않은 경우
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < M &&
          ny < N &&
          graph[ny][nx] === 1 &&
          !visited[ny][nx]
        ) {
          dfs(nx, ny); // 재귀적으로 방문
        }
      }
    }

    // 지렁이 개수 카운트
    let wormCount = 0;

    // 배추밭을 순회하며 DFS 탐색
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (graph[y][x] === 1 && !visited[y][x]) {
          dfs(x, y); // 새로운 배추 클러스터 발견 시 DFS 실행
          wormCount++; // 지렁이 수 증가
        }
      }
    }

    console.log(wormCount); // 결과 출력
  }
}

solution(input);
