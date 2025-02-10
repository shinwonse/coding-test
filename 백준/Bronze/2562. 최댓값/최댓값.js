const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const numbers = input.map(Number);

  const max = Math.max(...numbers);
  const maxIndex = numbers.indexOf(max);

  console.log(max);
  console.log(maxIndex + 1);
}

solution(input);
