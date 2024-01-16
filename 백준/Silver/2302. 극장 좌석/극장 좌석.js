const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const m = Number(input[1]);

  let d = Array.from({ length: 50 }, () => 0);
  d[0] = 1;
  d[1] = 1;
  d[2] = 2;

  const dp = (x) => {
    if (d[x] !== 0) return d[x];
    d[x] = dp(x - 1) + dp(x - 2);
    return d[x];
  }

  const arr = [];
  let start = 0;
  for (let i = 2; i < m + 2; i += 1) {
    const end = Number(input[i]);
    arr.push(end - 1 - start);
    start = end;
  }
  arr.push(n - start);

  let answer = 1;
  for (let x of arr) answer *= dp(x);
  console.log(answer);
}

solution(input);
