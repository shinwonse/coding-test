const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const balls = [];
  for (let i = 1; i < n + 1; i++) {
    const [color, size] = input[i].split(' ').map(Number);
    balls.push([color, size, i]);
  }
  balls.sort((a, b) => a[1] - b[1]);

  let summary = 0; // 전체 누적 합
  let colorSummary = Array(200001).fill(0); // 색상별 누적 합
  let result = Array(n).fill(0); // 공의 등장 순서별 최종 결과

  let start = 0;
  while (start < n) {
    // 크기가 같은 공의 마지막 인덱스 찾기(start는 시작 인덱스, end는 끝 인덱스)
    let end = start;
    while (end < n && balls[start][1] === balls[end][1]) {
      end += 1;
    }
    // 자기보다 작은 공들의 크기 합 - 같은 색상인 공들의 크기 합
    for (let i = start; i < end; i++) {
      result[balls[i][2]] = summary - colorSummary[balls[i][0]];
    }
    for (let i = start; i < end; i++) {
      colorSummary[balls[i][0]] += balls[i][1]; // 색상별 누적 합
      summary += balls[i][1]; // 전체 누적 합
    }
    start = end;
  }
  result.shift();
  console.log(result.join('\n'));
}

solution(input);
