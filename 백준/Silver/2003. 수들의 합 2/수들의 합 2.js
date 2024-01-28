const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  let count = 0;
  let intervalSum = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    while (intervalSum < m && end < n) {
      intervalSum += arr[end];
      end += 1;
    }
    if (intervalSum === m) {
      count += 1;
    }
    intervalSum -= arr[start];
  }
  console.log(count);
}

solution(input);
