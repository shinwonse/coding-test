const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input[1].split(' ').map(Number);

  let answer = 0;
  
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end <= N) {
    if (sum < M) {
      sum += array[end];
      end++;
    } else if (sum > M) {
      sum -= array[start];
      start++;
    } else {
      answer++;
      sum -= array[start];
      start++;
    }
  }

  console.log(answer);
}

solution(input);
