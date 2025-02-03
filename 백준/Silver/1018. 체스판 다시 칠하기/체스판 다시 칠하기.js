const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const board = input.slice(1);

  const pattern1 = [];
  const pattern2 = [];

  // 체스판 패턴 생성
  for (let i = 0; i < 8; i++) {
    pattern1.push([]);
    pattern2.push([]);
    for (let j = 0; j < 8; j++) {
      pattern1[i].push((i + j) % 2 === 0 ? "W" : "B");
      pattern2[i].push((i + j) % 2 === 0 ? "B" : "W");
    }
  }

  let minCount = Infinity;

  // 모든 가능한 8x8 체스판 탐색
  for (let y = 0; y <= N - 8; y++) {
    for (let x = 0; x <= M - 8; x++) {
      minCount = Math.min(minCount, getMin(y, x, board, pattern1, pattern2));
    }
  }

  console.log(minCount);
}

function getMin(sy, sx, board, pattern1, pattern2) {
  let case1 = 0;
  let case2 = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[sy + i][sx + j] !== pattern1[i][j]) case1++;
      if (board[sy + i][sx + j] !== pattern2[i][j]) case2++;
    }
  }

  return Math.min(case1, case2);
}

solution(input);
