const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => a - b);
  
  let minDiff = Infinity;
  let start = 0;
  let end = 0;

  while (start <= end && end < n) {
    const diff = Math.abs(arr[start] - arr[end]);
    if (diff < m) {
      end += 1;
    } else {
      minDiff = Math.min(minDiff, diff);
      start += 1;
    }
    if (diff === m) {
      break;
    }
  }

  return minDiff;
}

const answer = solution(input);
console.log(answer);
