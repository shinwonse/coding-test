const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  return arr.sort((a, b) => a - b)[k - 1];
}

const answer = solution(input);
console.log(answer);
