const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const result = input[1].split("");
  while (result.length > 1) {
    if (result[result.length - 1] === "A") {
      result.pop();
    } else {
      result.pop();
      result.reverse();
    }
    if (result.join("") === input[0]) {
      break;
    }
  }
  if (result.join("") === input[0]) {
    console.log(1);
  } else {
    console.log(0);
  }
};

solution(input);
