const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const n = Number(input[0]);
  const m = Number(input[1]);

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 2; i < m + 2; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = Array(n + 1).fill(false);

  dfs(graph, visited, 1);

  const result = visited.filter((v) => v).length - 1;
  console.log(result);
}

function dfs(graph, visited, node) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(graph, visited, next);
    }
  }
}

solution(input);
