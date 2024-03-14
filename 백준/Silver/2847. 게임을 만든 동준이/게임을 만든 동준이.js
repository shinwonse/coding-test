const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input.slice(1).map(Number);

  let answer = 0;

  for (let i = n - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      continue;
    }
    answer += arr[i - 1] - arr[i] + 1;
    arr[i - 1] = arr[i] - 1;
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
