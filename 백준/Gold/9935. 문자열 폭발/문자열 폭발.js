const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const chars = input[0];
  const explosionChar = input[1];
  const explosionLen = explosionChar.length;

  const stack = [];

  for (let i = 0; i < chars.length; i++) {
    stack.push(chars[i]);

    if (stack.length >= explosionLen && stack.slice(-explosionLen).join('') === explosionChar) {
      stack.splice(-explosionLen);
    }
  }

  console.log(stack.length > 0 ? stack.join('') : 'FRULA');
}

solution(input);