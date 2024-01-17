const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

function solution(A) {
  let dy = Array.from({ length: A + 1 },() => 0);

  for(let i = 2; i <= A ; i++) {
    dy[i] = dy[i - 1] + 1;
    if(i % 2 === 0) {
      dy[i] = Math.min(dy[i], dy[i / 2] + 1);
    }
    if(i % 3 === 0) {
      dy[i] = Math.min(dy[i], dy[i / 3] + 1);
    }
  }
  return dy[A];
}

console.log(solution(input[0]));