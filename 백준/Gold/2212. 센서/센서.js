const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 각 집중국의 수신 가능 영역의 길이의 합 최소화
// 적어도 하나의 집중국과는 통신이 가능해야 한다.
const solution = (input) => {
  let answer = 0;
  const N = Number(input[0]);
  const K = Number(input[1]);
  if (K >= N) {
    return 0;
  }
  const arr = input[2].split(" ").map((n) => Number(n));
  arr.sort((a, b) => a - b);
  const diff = arr.map((n, index) => {
    if (index === 0) return 0;
    return n - arr[index - 1];
  });
  diff.sort((a, b) => b - a);
  for (let i = K - 1; i < N - 1; i += 1) {
    answer += diff[i];
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
