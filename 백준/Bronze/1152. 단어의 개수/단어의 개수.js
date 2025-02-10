const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  if (input[0].trim() === "") {
    console.log(0);
  } else {
    console.log(input[0].trim().split(" ").length);
  }
}

solution(input);
