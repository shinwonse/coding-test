const { log } = require("console");

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// D킬로미터 길이의 고속도로
// 지름길이 존재하고 지름길은 일방통행, 고속도로 역주행 불가
// 운전해야 하는 거리의 최솟값
const solution = (input) => {
  const [n, d] = input[0].split(' ').map(Number);
  let answer = d;

  // 지름길의 시작 위치, 도착 위치, 지름길의 길이
  const shortcutArr = [];

  for (let i = 1; i < n + 1; i++) {
    shortcutArr.push(input[i].split(' ').map(Number));
  }
  shortcutArr.sort((a, b) => a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]);

  const matrix = new Map();
  for (let i = 0; i < n; i++) {
    let min = matrix.get(shortcutArr[i][1]) ?? shortcutArr[i][1];
    if (min > d) continue;
    min = Math.min(min, shortcutArr[i][0] + shortcutArr[i][2]);
    for (const [key, value] of matrix) {
      if (key <= shortcutArr[i][0]) {
        min = Math.min(min, (shortcutArr[i][0] - key) + value + shortcutArr[i][2]);
      }
    }
    matrix.set(shortcutArr[i][1], min);
  }

  for (const [key, value] of matrix) {
    answer = Math.min(answer, d - key + value);
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
