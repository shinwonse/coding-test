const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);

  numbers.sort((a, b) => a - b);
  console.log(Math.min(...numbers), Math.max(...numbers));
}

solution(input);
