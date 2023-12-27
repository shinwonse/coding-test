const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const graph = Array.from(Array(n + 1), () => Array());
  for (let i = 0; i < m; i += 1) {
    const [start, end] = input[i + 2].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
  }

  let answer = 0;
  const visited = Array(n + 1).fill(false);

  const dfs = (x) => {
    visited[x] = true;
    answer += 1;
    for (const node of graph[x]) {
      if (!visited[node]) dfs(node);
    }
  }

  dfs(1);
  return answer - 1;
};

const answer  = solution(input);
console.log(answer);
