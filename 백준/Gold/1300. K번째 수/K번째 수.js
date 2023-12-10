const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const K = Number(input[1]);

  let start = 1;
  let end = 10 ** 10;

  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let i = 1; i <= N; i++) {
      count += Math.min(Math.floor(mid / i), N);
    }
    if (count < K) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid - 1;
    }
  }
  return result;
};

const answer = solution(input);
console.log(answer);
