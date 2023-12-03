const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(" ").map((n) => Number(n));
  
  let answer = 0;
  let arrow = new Array(1000001).fill(0);
  for (const x of arr) {
    if (arrow[x] > 0) {
      arrow[x] -= 1;
      arrow[x - 1] += 1;
    } else {
      arrow[x - 1] += 1;
      answer += 1;
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
