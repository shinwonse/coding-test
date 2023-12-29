const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const dfs = (x, y, n, graph) => {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] >= 1) {
    graph[x][y] = -1;
    let result = 1;
    result += dfs(x - 1, y, n, graph);
    result += dfs(x, y - 1, n, graph);
    result += dfs(x + 1, y, n, graph);
    result += dfs(x, y + 1, n, graph);
    return result;
  }
  return 0;
}

const solution = (input) => {
  const n = Number(input[0]);
  const answer = [];
  const graph = [];
  for (let i = 1; i <= n; i += 1) {
    graph.push(input[i].split('').map(Number));
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      let current = dfs(i, j, n, graph);
      if (current > 0) {
        answer.push(current);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return `${answer.length}\n${answer.join('\n')}`;
};

const answer = solution(input);
console.log(answer);
