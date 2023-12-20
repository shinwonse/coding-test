const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const isPossible = (x, y, queens) => {
  for (const [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

const dfs = (row, n, count, queens) => {
  if (row === n) count += 1;
  for (let i = 0; i < n; i += 1) {
    if (!isPossible(row, i, queens)) continue;
    queens.push([row, i]);
    count = dfs(row + 1, n, count, queens);
    queens.pop();
  }
  return count;
}

const solution = (input) => {
  const n = Number(input[0]);
  return dfs(0, n, 0, []);
};

const answer  = solution(input);
console.log(answer);
