const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const array = input[0].split(" ");
  return array.sort((a, b) => a - b).join(" ");
};

const answer = solution(input);
console.log(answer);
