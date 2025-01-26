const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(input) {
  const N = Number(input[0]);
  const grid = input.slice(1).map((line) => line.split(""));

  // 일반인과 적록색약 방문 배열
  const visitedNormal = Array.from({ length: N }, () => Array(N).fill(false));
  const visitedBlind = Array.from({ length: N }, () => Array(N).fill(false));

  // 구역 계산 함수
  function countAreas(isBlind) {
    const visited = isBlind ? visitedBlind : visitedNormal;
    let areaCount = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          areaCount++;
          dfs(i, j, grid[i][j], visited, grid, isBlind);
        }
      }
    }

    return areaCount;
  }

  const normalAnswer = countAreas(false);
  const blindAnswer = countAreas(true);

  console.log(normalAnswer, blindAnswer);
}

function dfs(x, y, color, visited, graph, isBlind) {
  const N = graph.length;
  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if (visited[nx][ny]) continue;

    const nextColor = graph[nx][ny];
    if (isBlind) {
      if (
        (color === "R" || color === "G") &&
        (nextColor === "R" || nextColor === "G")
      ) {
        dfs(nx, ny, nextColor, visited, graph, isBlind);
      } else if (color === nextColor) {
        dfs(nx, ny, nextColor, visited, graph, isBlind);
      }
    } else {
      if (color === nextColor) {
        dfs(nx, ny, nextColor, visited, graph, isBlind);
      }
    }
  }
}

solution(input);
