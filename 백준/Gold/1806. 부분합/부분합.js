const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, S] = input[0].split(" ").map(Number);
  const array = input[1].split(" ").map(Number);

  let answer = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < N) {
    sum += array[right]; // 현재 요소 추가

    while (sum >= S) { // S 이상이면 최소 길이 갱신 후 left 증가
      answer = Math.min(answer, right - left + 1);
      sum -= array[left];
      left++;
    }

    right++; // right 포인터 이동
  }

  console.log(answer === Infinity ? 0 : answer);
}

solution(input);