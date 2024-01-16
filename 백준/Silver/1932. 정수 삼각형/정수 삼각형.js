const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  let dp = [];
  for (let i = 1; i <= n; i += 1) {
    dp.push(input[i].split(' ').map(Number));
  }

  for (let i = 1; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      let upLeft = 0;
      if (j !== 0) upLeft = dp[i - 1][j - 1];
      let up = 0;
      if (j !== i) up = dp[i - 1][j];
      dp[i][j] = dp[i][j] + Math.max(upLeft, up);
    }
  }
  console.log(Math.max(...dp[n - 1]));
}

solution(input);
