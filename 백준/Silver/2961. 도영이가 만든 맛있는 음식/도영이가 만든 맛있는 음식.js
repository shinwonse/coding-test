const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");



const solution = (input) => {
  const N = Number(input[0]);
  const ingredients = [];
  for (let i = 1; i <= N; i++) {
    ingredients.push(input[i].split(' ').map(Number));
  }
  const visited = Array(N).fill(false);
  const result = [];
  let answer = 1e9;

  const dfs = (depth, start) => {
    if (depth >= 1) {
      let sourTaste = 1;
      let bitterness = 0;
      for (let i of result) {
        const [x, y] = ingredients[i];
        sourTaste *= x;
        bitterness += y;
      }
      answer = Math.min(answer, Math.abs(sourTaste - bitterness));
    }
    for (let i = start; i < N; i += 1) {
      if (visited[i]) continue;
      visited[i] = true;
      result.push(i);
      dfs(depth + 1, i + 1);
      visited[i] = false;
      result.pop();
    }
  }

  dfs(0, 0);
  return answer;
};

const answer  = solution(input);
console.log(answer);
