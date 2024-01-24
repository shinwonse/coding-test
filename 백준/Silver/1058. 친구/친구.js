const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const INF = 1e9;

  let graph = [new Array(n + 1).fill(INF)];
  for (let i = 1; i <= n; i += 1) {
    graph.push(new Array(n + 1).fill(INF));
    let line = input[i].split('');
    for (let j = 0; j < n; j += 1) {
      if (line[j] === 'Y') graph[i][j + 1] = 1;
    }
  }
  for (let i = 1; i <= n; i += 1) graph[i][i] = 0;

  for (let k = 1; k <= n; k += 1) {
    for (let i = 1; i <= n; i += 1) {
      for (let j = 1; j <= n; j += 1) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  let twoFriends = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (i !== j && graph[i][j] <= 2) twoFriends[i] += 1;
    }
  }
  console.log(Math.max(...twoFriends));
}

solution(input);
