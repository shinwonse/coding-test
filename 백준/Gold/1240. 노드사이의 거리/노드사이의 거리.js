const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const answer = [];
  const [n, m] = input[0].split(' ').map(Number);
  const graph = [];
  for (let i = 1; i <= n; i += 1) graph[i] = [];
  for (let i = 1; i < n; i += 1) {
    const [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
  }

  const dfs = (x, dist, visited, distance) => {
    if (visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (let i = 0; i < graph[x].length; i += 1) {
      const [y, cost] = graph[x][i];
      dfs(y, dist + cost, visited, distance);
    }
  }

  for (let i = n; i < n + m; i += 1) {
    const [x, y] = input[i].split(' ').map(Number);
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);
    dfs(x, 0, visited, distance);
    answer.push(distance[y]);
  }
  return answer.join('\n');
};

const answer  = solution(input);
console.log(answer);
