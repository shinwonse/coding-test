const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  let graph = [];
  let temp = [];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let result = 0;

  for (let i = 1; i <= n; i += 1) {
    graph.push(input[i].split(' ').map(Number));
    temp.push(Array(m).fill(0));
  }

  const virus = (x, y) => {
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        virus(nx, ny);
      }
    }
  }

  const getScore = () => {
    let score = 0;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        if (temp[i][j] === 0) score += 1;
      }
    }
    return score;
  }

  const dfs = (count) => {
    if (count === 3) {
      for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
          temp[i][j] = graph[i][j];
        }
      }
      for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
          if (temp[i][j] === 2) {
            virus(i, j);
          }
        }
      }
      result = Math.max(result, getScore());
      return;
    }
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        if (graph[i][j] === 0) {
          graph[i][j] = 1;
          dfs(count + 1);
          graph[i][j] = 0;
        }
      }
    }
  }
  dfs(0);
  return result;
};

const answer = solution(input);
console.log(answer);
