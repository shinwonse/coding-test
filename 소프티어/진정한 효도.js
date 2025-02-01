const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * 1 * 3 크기의 영역의 높이를 동일하게 맞춰야 할 때, 최소 비용을 구하라
 */
function solution(input) {
  const graph = [];

  // 입력 값 초기화 (3x3 격자)
  for (let i = 0; i < 3; i++) {
    const row = input[i].split(" ").map(Number);
    graph.push(row);
  }

  let minCost = Infinity;

  // 1. 가로 영역 탐색 (각 행별로 탐색)
  for (let row = 0; row < 3; row++) {
    const heights = [graph[row][0], graph[row][1], graph[row][2]];

    // 목표 높이별로 최소 비용 계산
    for (let targetHeight = 1; targetHeight <= 3; targetHeight++) {
      let currentCost = 0;

      for (const height of heights) {
        currentCost += Math.abs(height - targetHeight);
      }

      minCost = Math.min(minCost, currentCost);
    }
  }

  // 2. 세로 영역 탐색 (각 열별로 탐색)
  for (let col = 0; col < 3; col++) {
    const heights = [graph[0][col], graph[1][col], graph[2][col]];

    // 목표 높이별로 최소 비용 계산
    for (let targetHeight = 1; targetHeight <= 3; targetHeight++) {
      let currentCost = 0;

      for (const height of heights) {
        currentCost += Math.abs(height - targetHeight);
      }

      minCost = Math.min(minCost, currentCost);
    }
  }

  console.log(minCost);
}

solution(input);
