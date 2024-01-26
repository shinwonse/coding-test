const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const x = Number(input[2]);

  arr.sort((a, b) => a - b);
  let result = 0;
  let start =0 ;
  let end = n - 1;

  while (true) {
    while (end > 0 && arr[start] + arr[end] > x) {
      end--;
    }
    if (arr[start] + arr[end] === x) {
      result++;
      end--;
    }
    start++;
    if (start >= end) break;
  }
  console.log(result);
}

solution(input);
