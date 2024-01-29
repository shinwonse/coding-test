const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const m = Number(input[2]);

  const prefixSum = [0];
  let summary = 0;
  for (const i of arr) {
    summary += i;
    prefixSum.push(summary);
  }

  const answer = [];
  for (let i = 3; i < m + 3; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    answer.push(prefixSum[end] - prefixSum[start - 1]);
  }
  return answer.join('\n');
}

const answer = solution(input);
console.log(answer);
