const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

function solution(input) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push('(');
    } else {
      stack.pop(); // 일단 pop (막대기든 레이저든 닫혔으므로)

      if (input[i - 1] === '(') {
        // 레이저인 경우: 현재 스택에 남아있는 막대기 개수만큼 조각 증가
        answer += stack.length;
      } else {
        // 막대기 끝나는 경우: 막대기 조각 하나 추가
        answer += 1;
      }
    }
  }

  console.log(answer);
}

solution(input);