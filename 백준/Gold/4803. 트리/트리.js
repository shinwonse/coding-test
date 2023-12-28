const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const isCycle = (x, prev, visited, graph) => {
  visited[x] = true;
  for (const y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x, visited, graph)) return true;
    } else if (y !== prev) return true;
  }
  return false;
}

const solution = (input) => {
  let line = 0;
  let testCase = 1;

  while (true) {
    const [n, m] = input[line].split(' ').map(Number);
    if (n === 0 && m === 0) break;
    let graph = [];
    for (let i = 1; i <= n; i += 1) graph[i] = [];
    for (let i = 1; i <= m; i += 1) {
      const [x, y] = input[line + i].split(' ').map(Number);
      graph[x].push(y);
      graph[y].push(x);
    }
    const visited = new Array(n + 1).fill(false);
    let count = 0;
    for (let i = 1; i <= n; i += 1) {
      if (!visited[i]) {
        if (!isCycle(i, 0, visited, graph)) count += 1;
      }
    }
    if (count === 0) console.log(`Case ${testCase}: No trees.`);
    else if (count === 1) console.log(`Case ${testCase}: There is one tree.`);
    else console.log(`Case ${testCase}: A forest of ${count} trees.`);
    line += m + 1;
    testCase += 1;
  }
};

solution(input);
