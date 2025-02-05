const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = parseInt(input[0], 10);
  const board = input.slice(1).map((line) => line.split(""));

  function getMaxCandyLength(board) {
    let maxLength = 1;

    // 행 검사
    for (let i = 0; i < N; i++) {
      let count = 1;
      for (let j = 1; j < N; j++) {
        if (board[i][j] === board[i][j - 1]) {
          count++;
        } else {
          maxLength = Math.max(maxLength, count);
          count = 1;
        }
      }
      maxLength = Math.max(maxLength, count);
    }

    // 열 검사
    for (let j = 0; j < N; j++) {
      let count = 1;
      for (let i = 1; i < N; i++) {
        if (board[i][j] === board[i - 1][j]) {
          count++;
        } else {
          maxLength = Math.max(maxLength, count);
          count = 1;
        }
      }
      maxLength = Math.max(maxLength, count);
    }

    return maxLength;
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 오른쪽 사탕과 교환
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        result = Math.max(result, getMaxCandyLength(board));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]; // 원상 복구
      }

      // 아래쪽 사탕과 교환
      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        result = Math.max(result, getMaxCandyLength(board));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]]; // 원상 복구
      }
    }
  }

  console.log(result);
}

solution(input);
