const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const permutation = [];
  const visited = Array(N).fill(false);

  let answer = 0;

  const dfs = () => {
    if (permutation.length === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i += 1) {
        sum += Math.abs(permutation[i] - permutation[i + 1]);
      }
      answer = Math.max(answer, sum);
    } else {
      for (let i = 0; i < N; i += 1) {
        if (visited[i]) continue;
        visited[i] = true;
        permutation.push(arr[i]);
        dfs();
        visited[i] = false;
        permutation.pop();
      }
    }
  }
  dfs();
  return answer;
};

const answer  = solution(input);
console.log(answer);
