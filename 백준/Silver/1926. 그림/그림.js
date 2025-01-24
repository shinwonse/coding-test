const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);

  let count = 0; // 그림의 개수
  let maxArea = 0; // 가장 넓은 그림의 넓이

  const graph = [];
  for (let i = 1; i < n + 1; i++) {
    const row = input[i].split(" ").map(Number);
    graph.push(row);
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  function dfs(x, y) {
    let area = 1; // 현재 그림의 넓이
    const stack = [[x, y]]; // 스택을 사용한 DFS

    visited[x][y] = true;

    while (stack.length) {
      const [cx, cy] = stack.pop();

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (graph[nx][ny] === 0 || visited[nx][ny]) continue;

        visited[nx][ny] = true;
        stack.push([nx, ny]);
        area++;
      }
    }

    return area;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        const area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
        count++;
      }
    }
  }

  console.log(count);
  console.log(maxArea);
}

solution(input);
