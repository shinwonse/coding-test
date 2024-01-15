const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const t = Number(input[0]);
  let zero = 0;
  let one = 0;

  const fibonacci = (n) => {
    if (n === 0) {
      zero++;
      return 0;
    }
    if (n === 1) {
      one++;
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  let dp = new Array(100).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= 40; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  for (let i = 1; i <= t; i += 1) {
    const num = Number(input[i]);
    if (num === 0) {
      console.log(1, 0);
    } else if (num === 1) {
      console.log(0, 1);
    } else {
      console.log(dp[num - 1], dp[num]);
    }
  }
}

solution(input);
