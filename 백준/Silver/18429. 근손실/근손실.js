const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);
  const visited = [];
  let answer = 0;

  const dfs = (day, weight) => {
    if (weight < 0) return;
    if (day === n) return answer += 1;
    for (let i = 0; i < n; i += 1) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(day + 1, weight + arr[i] - k);
      visited[i] = false;
    }
  }
  dfs(0, 0);
  return answer;
};

const answer  = solution(input);
console.log(answer);
