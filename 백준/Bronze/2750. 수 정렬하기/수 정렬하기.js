const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const arr = input.slice(1).map(Number);

  console.log(arr.sort((a, b) => a - b).join("\n"));
}

solution(input);
