const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let answer = '';
  for (let tc = 0; tc < input.length - 1; tc++) {
    const testCase = input[tc].split(' ');
    const [k, ...arr] = input[tc].split(' ').map(Number);
    const visited = new Array(k).fill(false);
    const result = [];
    let temp = '';

    const dfs = (start) => {
      if (result.length === 6) {
        temp += result.join(' ') + '\n';
        return;
      }
      for (let i = start; i < k; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        result.push(arr[i]);
        dfs(i + 1);
        result.pop();
        visited[i] = false;
      }
    }
    dfs(0);

    answer += temp + '\n';
  }
  return answer;
};


const answer  = solution(input);
console.log(answer);
