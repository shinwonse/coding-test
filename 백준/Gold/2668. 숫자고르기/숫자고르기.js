const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const dfs = (x, graph, visited, finished, result) => {
  visited[x] = true;
  let next = graph[x];
  if (!visited[next]) {
    dfs(next, graph, visited, finished, result);
  } else if (!finished[next]) {
    while (next !== x) {
      result.push(next);
      next = graph[next];
    }
    result.push(x);
  }
  finished[x] = true;
}

const solution = (input) => {
  let n = Number(input[0]);
  const graph = [0];
  for (let i = 1; i <= n; i += 1) {
    graph.push(Number(input[i]));
  }
  const visited = new Array(n + 1).fill(false);
  const finished = new Array(n + 1).fill(false);
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    if (!visited[i]) {
      dfs(i, graph, visited, finished, result);
    }
  }

  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join("\n"));
};

solution(input);
