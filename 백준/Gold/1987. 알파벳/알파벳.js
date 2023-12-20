const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [r, c] = input[0].split(' ').map(Number);
  const graph = [];
  for (let i = 0; i < r; i += 1) {
    graph.push(input[i + 1].split(''));
  }
  const visited = new Set();
  visited.add(graph[0][0]);
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let answer = 0;
  const dfs = (x, y, count) => {
    answer = Math.max(answer, count);
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
      if (visited.has(graph[nx][ny])) continue;
      visited.add(graph[nx][ny]);
      dfs(nx, ny, count + 1);
      visited.delete(graph[nx][ny]);
    }
  };
  dfs(0, 0, 1);
  return answer;
};

const answer  = solution(input);
console.log(answer);
