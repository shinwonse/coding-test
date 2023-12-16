const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const T = Number(input[0]);
  for (let i = 0; i < T; i += 1) {
    console.log(`Case #${i + 1}: ${input[i + 1].split(" ").reduce((acc, cur) => acc + Number(cur), 0)} `);
  }
};

solution(input);
