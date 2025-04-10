const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function dfs(node, graph, visited) {
  visited[node] = true;
  let count = 0;

  for (const next of graph[node]) {
    if (!visited[next]) {
      count += 1 + dfs(next, graph, visited);
    }
  }

  return count;
}

function solution(input) {
  const N = Number(input[0]);
  const M = Number(input[1]);

  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array.from({ length: N + 1 }, () => false);

  for (let i = 2; i < M + 2; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  const infectedCount = dfs(1, graph, visited);
  console.log(infectedCount);
}

solution(input);