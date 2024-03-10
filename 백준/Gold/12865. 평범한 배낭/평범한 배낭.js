const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const dp = Array(k + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const [w, v] = input[i + 1].split(' ').map(Number);
    for (let j = k; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }

  return dp[k];
}

const answer = solution(input);
console.log(answer);
