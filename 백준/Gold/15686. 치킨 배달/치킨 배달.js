const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const chicken = [];
  const house = [];
  for (let i = 1; i <= n; i += 1) {
    const line = input[i].split(' ').map(Number);
    for (let j = 0; j < n; j += 1) {
      if (line[j] === 1) house.push([i, j]);
      if (line[j] === 2) chicken.push([i, j]);
    }
  }
  const visited = Array(chicken.length).fill(false);
  const selected = [];

  const dfs = (depth, start) => {
    if (depth === m) {
      let result = [];
      for (const i of selected) result.push(chicken[i]);
      let sum = 0;
      for (const [hx, hy] of house) {
        let temp = 1e9;
        for (const [cx, cy] of result) {
          temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
        }
        sum += temp;
      }
      answer = Math.min(answer, sum);
      return;
    }
    for (let i = start; i < chicken.length; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        selected.push(i);
        dfs(depth + 1, i + 1);
        selected.pop();
        visited[i] = false;
      }
    }
  }

  let answer = 1e9;
  dfs(0, 0);
  return answer;
};

const answer = solution(input);
console.log(answer);
