const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

/**
 * 최소 이동 횟수를 구하는 문제이므로 BFS
 * BFS는 최단 경로를 보장
 */
function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);

  const MAX = 100000;
  const visited = new Array(MAX + 1).fill(0);

  const answer = bfs(N, K, visited, MAX);
  console.log(answer);
}

function bfs(cur, destination, visited, MAX) {
  const queue = [[cur, 0]]; // (현재 위치, 이동 시간)

  while (queue.length) {
    const [currentPosition, currentTime] = queue.shift();

    // 목표 위치에 도달하면 즉시 반환
    if (currentPosition === destination) {
      return currentTime;
    }

    for (const next of [currentPosition - 1, currentPosition + 1, currentPosition * 2]) {
      if (next >= 0 && next <= MAX && visited[next] === 0) {
        visited[next] = 1; // 방문 체크
        queue.push([next, currentTime + 1]);
      }
    }
  }
}

solution(input);