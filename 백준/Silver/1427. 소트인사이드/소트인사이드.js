const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const array = input[0].split("").map(Number);
  return array.sort((a, b) => b - a);
};

const answer = solution(input).join("");
console.log(answer);
