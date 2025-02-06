const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(""));

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let maxCount = 0;
  const visitedAlpha = new Set();

  const dfs = (x, y, count) => {
    // 현재 알파벳이 이미 방문된 경우 탐색 종료
    if (visitedAlpha.has(board[x][y])) {
      return;
    }

    // 현재 위치의 알파벳을 방문 처리
    visitedAlpha.add(board[x][y]);

    // 사방 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
        dfs(nx, ny, count + 1);
      }
    }

    // 최대 이동 횟수 갱신
    maxCount = Math.max(maxCount, count);

    // 백트래킹: 현재 알파벳 방문 해제
    visitedAlpha.delete(board[x][y]);
  };

  // 시작 위치에서 DFS 탐색 시작
  dfs(0, 0, 1);

  // 결과 출력
  console.log(maxCount);
}

solution(input);
