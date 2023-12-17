const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const arr = [];
  for (let i = 1; i <= N; i += 1) {
    arr.push(i);
  }
  const selected = [];

  let answer = '';
  const dfs = (arr, depth) => {
    if (depth === M) {
      let result = [];
      for (let i of selected) result.push(arr[i]);
      for (let x of result) answer += x + ' ';
      return answer += '\n';
    }
    for (let i = 0; i < arr.length; i += 1) {
      selected.push(i);
      dfs(arr, depth + 1, i);
      selected.pop();
    }
  }
  dfs(arr, 0);
  return answer;
};

const answer  = solution(input);
console.log(answer);
