const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let t = Number(input[0]);
  let line = 1;
  const answerArr = [];

  const dfs = (graph, n, m, x, y) => {
    if (x <= -1 || x >= n || y <= -1 || y >= m) {
      return false;
    }
    if (graph[x][y] === 1) {
      graph[x][y] = 0;
      dfs(graph, n, m, x - 1, y);
      dfs(graph, n, m, x, y - 1);
      dfs(graph, n, m, x + 1, y);
      dfs(graph, n, m, x, y + 1);
      return true;
    }
    return false;
  }

  while (t--) {
    const [m, n , k] = input[line].split(' ').map(Number);
    let graph = [];
    for (let i = 0; i < n; i += 1) {
      graph[i] = new Array(m);
    }
    for (let i = 1; i <= k; i += 1) {
      const [y, x] = input[line + i].split(' ').map(Number);
      graph[x][y] = 1;
    }
    let answer = 0;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        if (dfs(graph, n, m, i, j)) {
          answer += 1;
        }
      }
    }
    line += k + 1;
    answerArr.push(answer);
  }
  return answerArr.join('\n');
};

const answer  = solution(input);
console.log(answer);
