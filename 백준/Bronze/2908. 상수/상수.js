const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [A, B] = input[0].split(" ");

  const reversedA = A.split("").reverse().join("");
  const reversedB = B.split("").reverse().join("");

  console.log(Math.max(reversedA, reversedB));
}

solution(input);
