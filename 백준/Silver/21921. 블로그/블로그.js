const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, x] = input[0].split(' ').map(Number);
  const arr = [0, ...input[1].split(' ').map(Number)];

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= x) {
      sum += arr[i];
    }
  }
  let maxSum = sum;
  let count = 1;

  let left = 1;
  let right = x;
  while (right < n) {
    left += 1;
    right += 1;
    sum += arr[right] - arr[left - 1];
    if (maxSum < sum) {
      maxSum = sum;
      count = 1;
    }
    else if (maxSum === sum) {
      count += 1;
    }
  }

  if (maxSum === 0) {
    console.log('SAD');
  }
  else {
    console.log(maxSum);
    console.log(count);
  }
}

solution(input);
