const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 각각의 탑에서 발사한 레이저 신호를 어느 탑에서 수신하는지
 */
function solution(input) {
  const N = Number(input[0]);
  const towers = input[1].split(' ').map(Number);
  const answer = new Array(N).fill(0);
  const stack = [];

  for (let i = N - 1; i >= 0; i--) {
    while (stack.length && towers[stack[stack.length - 1]] <= towers[i]) {
      const idx = stack.pop();
      answer[idx] = i + 1;
    }
    stack.push(i);
  }

  console.log(answer.join(' '));
}

solution(input);