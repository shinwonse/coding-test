const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  let [A, B] = input[0].split(' ').map(Number);

  let count = 1;

  while (B > A) {
    if (B % 2 === 0) {
      B = B / 2;
    } else if (B % 10 === 1) {
      B = Math.floor(B / 10);
    } else {
      console.log(-1);
      return;
    }
    count++;
  }

  console.log(B === A ? count: -1);
}

solution(input);