const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");



const solution = (input) => {
  const n = Number(input[0]);
  const graph = input.slice(1).map((line) => line.split(' ').map(Number));
  const visited = new Array(n).fill(false);
  let min = 1e9;

  const dfs = (depth, start, cost) => {
    if (depth === n - 1 && graph[start][0] !== 0) {
      min = Math.min(min, cost + graph[start][0]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!visited[i] && graph[start][i] !== 0) {
        visited[i] = true;
        dfs(depth + 1, i, cost + graph[start][i]);
        visited[i] = false;
      }
    }
  }

  visited[0] = true;
  dfs(0, 0, 0);

  return min;
};

const answer  = solution(input);
console.log(answer);
