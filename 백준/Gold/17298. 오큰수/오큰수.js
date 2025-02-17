const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 오큰수는 오른쪽에 있으면서 큰 수 중에서 가장 왼쪽에 있는 수
 */
function solution(input) {
  const N = Number(input[0]);
  const array = input[1].split(' ').map(Number);
  const answer = new Array(N).fill(-1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && array[stack[stack.length - 1]] < array[i]) {
      const idx = stack.pop();
      answer[idx] = array[i];
    }
    stack.push(i);
  }

  console.log(answer.join(' '));
}

solution(input);