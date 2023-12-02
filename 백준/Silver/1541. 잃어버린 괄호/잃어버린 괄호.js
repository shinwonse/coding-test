const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const groups = input[0].split('-');
  let answer = 0;
  for (let i = 0; i <groups.length; i += 1) {
    const current = groups[i].split('+').map(Number).reduce((a, b) => a + b);
    if (i === 0) {
      answer += current;
    } else {
      answer -= current;
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);
