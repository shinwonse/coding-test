const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const a = Number(input[0]);
  const b = Number(input[1]);

  const mul1 = a * (b % 10);
  const mul2 = a * (Math.floor(b / 10) % 10);
  const mul3 = a * Math.floor(b / 100);
  const result = a * b;

  console.log(mul1);
  console.log(mul2);
  console.log(mul3);
  console.log(result);
}

solution(input);
