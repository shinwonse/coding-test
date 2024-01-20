const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  return n % 2 === 0 ? "CY" : "SK";
}

const answer = solution(input);
console.log(answer);
