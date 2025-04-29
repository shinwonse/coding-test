const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function dfs(current, target, graph, visited, depth) {
  if (current === target) return depth;
  visited[current] = true;

  for (const next of graph[current]) {
    if (!visited[next]) {
      const result = dfs(next, target, graph, visited, depth + 1);
      if (result !== -1) return result;      
    }
  }

  return -1;
}

function solution(input) {
  const n = Number(input[0]);
  const [a, b] = input[1].split(' ').map(Number);
  const m = Number(input[2]);

  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 3; i < m + 3; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  const visited = Array(n + 1).fill(false);
  const answer = dfs(a, b, graph, visited, 0);

  console.log(answer);
}

solution(input);