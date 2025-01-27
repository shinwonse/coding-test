const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  let count = 0;
  let remaining = N;

  // 5kg 봉지를 최대한 사용하며 남은 설탕을 확인
  while (remaining >= 0) {
    if (remaining % 5 === 0) {
      count += Math.floor(remaining / 5); // 남은 설탕을 5로 나누어 봉지 개수 추가
      console.log(count);
      return;
    }
    remaining -= 3; // 5로 나눌 수 없으면 3kg 봉지를 하나 사용
    count++;
  }

  console.log(-1); // 정확히 나눌 수 없는 경우
}

solution(input);
