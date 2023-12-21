const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const k = Number(input[0]);
  const arr = input[1].split(' ');
  const visited = new Array(10).fill(false);
  const result = [];

  let current ='';
  let first = '';

  const dfs = (depth) => {
    if (depth === k + 1) {
      let check = true;
      for (let i = 0; i < k; i += 1) {
        if (arr[i] === '<' && result[i] > result[i + 1]) {
          check = false;
        }
        else if (arr[i] === '>' && result[i] < result[i + 1]) {
          check = false;
        }
      }
      if (check) {
        current = '';
        for (let x of result) current += x + '';
        if (first === '') first = current;
      }
      return;
    }
    for (let i = 0; i < 10; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        result.push(i);
        dfs(depth + 1);
        visited[i] = false;
        result.pop();
      }
    }
  }
  dfs(0);
  return `${current}\n${first}`;
};

const answer  = solution(input);
console.log(answer);
