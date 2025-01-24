const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(input) {
  const [N, M, K] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 1; i <= K; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    graph[x - 1][y - 1] = 1;
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        answer = Math.max(answer, dfs(graph, visited, [i, j], N, M));
      }
    }
  }

  console.log(answer);
}

function dfs(graph, visited, node, N, M) {
  const [x, y] = node;
  visited[x][y] = true;
  let size = 1;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (graph[nx][ny] === 0 || visited[nx][ny]) continue;

    size += dfs(graph, visited, [nx, ny], N, M);
  }

  return size;
}

solution(input);
