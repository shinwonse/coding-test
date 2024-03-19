const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [h, w, n, m] = input[0].split(' ').map(Number);

  let answer = 0;

  answer += Math.ceil(h / (n + 1));
  answer *= Math.ceil(w / (m + 1));

  return answer;
}


const answer = solution(input);
console.log(answer);
