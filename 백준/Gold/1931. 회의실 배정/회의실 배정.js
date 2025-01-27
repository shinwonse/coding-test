const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const arr = [];

  for (let i = 1; i <= N; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    arr.push([start, end]);
  }

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let answer = 0;
  let currentTime = 0;

  for (let i = 0; i < N; i++) {
    const [start, end] = arr[i];
    if (currentTime <= start) {
      answer++;
      currentTime = end;
    }
  }

  console.log(answer);
}

solution(input);
