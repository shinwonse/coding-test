const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M, V] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < M; i++) {
    const [from, to] = input[i + 1].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  graph.forEach((v) => v.sort((a, b) => a - b));

  let visited = Array.from({ length: N + 1 }, () => false);
  let result = [];

  // DFS
  function dfs(graph, visited, node) {
    visited[node] = true;
    result.push(node); // 탐색 즉시 저장
    for (const next of graph[node]) {
      if (!visited[next]) {
        dfs(graph, visited, next);
      }
    }
  }

  dfs(graph, visited, V);
  console.log(result.join(" "));

  // BFS
  visited = Array.from({ length: N + 1 }, () => false);
  result = [];

  function bfs(graph, visited, node) {
    const queue = [node];
    visited[node] = true;
    while (queue.length) {
      const current = queue.shift();
      result.push(current); // 탐색 즉시 저장
      for (const next of graph[current]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }

  bfs(graph, visited, V);
  console.log(result.join(" "));
}

solution(input);
