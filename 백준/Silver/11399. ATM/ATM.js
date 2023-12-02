const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let answer =0 ;
  const N = input[0];
  const arr = input[1].split(" ").map((n) => Number(n));
  arr.sort((a, b) => a - b);
  for (let i = 0; i < N ; i+= 1) {
    answer += arr.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0);
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
