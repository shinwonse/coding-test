const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 스택에 push하는 순서는 반드시 오름차순을 지킴
 */
function solution(input) {
  const n = Number(input[0]);
  const sequence = input.slice(1).map(Number);
  const stack = [];
  const result = [];
  let current = 1;

  for (let i = 0; i < n; i++) {
    const target = sequence[i];

    while (current <= target) {
      stack.push(current);
      result.push('+');
      current++;
    }

    if (stack[stack.length - 1] === target) {
      stack.pop();
      result.push('-');
    } else {
      console.log('NO');
      return;
    }
  }

  console.log(result.join('\n'));
}

solution(input);