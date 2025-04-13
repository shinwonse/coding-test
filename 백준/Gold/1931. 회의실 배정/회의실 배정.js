const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const meets = input
    .slice(1)
    .map((meet) => meet.split(' ').map(Number))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    });

    let answer = 0;
    let current = 0;
    meets.forEach((meet) => {
      if (meet[0] >= current) {
        answer++;
        current = meet[1];
      }
    });

    console.log(answer);
}

solution(input);