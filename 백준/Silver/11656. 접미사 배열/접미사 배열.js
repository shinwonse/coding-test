const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const S = input[0];
  const N = S.length;

  const array = [];

  for (let i = 0; i < N; i++) {
    const sliced = S.slice(i);
    array.push(sliced);
  }

  array.sort();
  console.log(array.join("\n"));
}

solution(input);
