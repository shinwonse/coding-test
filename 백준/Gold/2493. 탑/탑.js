const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const towers = input[1].split(' ').map(Number);

  const answer = [];
  const stack = [];

  for (let i = 0; i < n; i++) {
    const now = towers[i];

    while (stack.length && towers[stack[stack.length - 1]] < now) {
      stack.pop();
    }

    if (stack.length) {
      answer.push(stack[stack.length - 1] + 1);
    } else {
      answer.push(0);
    }
    stack.push(i);
  }
  console.log(answer.join(' '));
}

solution(input);
