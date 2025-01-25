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
  const graph = input.slice(1).map((row) => row.split("").map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  const sizes = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        const size = dfs(graph, visited, i, j, N);
        sizes.push(size);
      }
    }
  }

  sizes.sort((a, b) => a - b); // 오름차순 정렬
  console.log(sizes.length); // 총 단지 수
  sizes.forEach((size) => console.log(size)); // 각 단지 크기 출력
}

function dfs(graph, visited, x, y, N) {
  visited[x][y] = true;
  let size = 1; // 현재 위치 포함

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if (graph[nx][ny] === 0 || visited[nx][ny]) continue;

    size += dfs(graph, visited, nx, ny, N); // 반환값 누적
  }

  return size;
}

solution(input);
