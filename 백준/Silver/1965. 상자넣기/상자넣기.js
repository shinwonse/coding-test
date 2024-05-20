const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 앞에 있는 상자의 크기가 뒤에 있는 상자의 크기보다 작으면, 앞에 있는 상자를 뒤에 있는 상자 안에 넣을 수 있다.
// 상자의 크기가 주어질 때, 한 번에 넣을 수 있는 최대의 상자 개수 출력
const solution = (input) => {
  const n = Number(input[0]);
  const boxes = input[1].split(' ').map(Number);

  const dp = new Array(n).fill(1);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[i] > boxes[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

const answer = solution(input);
console.log(answer);
