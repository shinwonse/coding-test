const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => []);

  for (let i = 1; i <= M; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  }

  const visited = Array(N).fill(false);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      answer++;
      dfs(graph, visited, i);
    }
  }

  console.log(answer);
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
