const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const map = input.slice(1).map((row) => row.split(' ').map(Number));

  let years = 0;

  while (true) {
    const icebergCount = countIcebergs(map, N, M);

    if (icebergCount === 0) {
      console.log(0);
      return;
    }
    
    if (icebergCount > 1) {
      console.log(years);
      return;
    }

    simulateMelting(map, N, M);
    years++;
  }
}

function countIcebergs(map, N, M) {
  let count = 0;
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0 && !visited[i][j]) {
        bfs(map, visited, i, j, N, M);
        count++;
      }
    }
  }

  return count;
}

function bfs(map, visited, x, y, N, M) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const [currX, currY] = queue.shift();

    for (const [dx, dy] of directions) {
      const newX = currX + dx;
      const newY = currY + dy;

      if (newX >= 0 && newX < N && newY >= 0 && newY < M && map[newX][newY] > 0 && !visited[newX][newY]) {
        visited[newX][newY] = true;
        queue.push([newX, newY]);
      }
    }
  }
}

function simulateMelting(map, N, M) {
  const melt = Array.from({ length: N }, () => Array(M).fill(0));
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0) {
        for (const [dx, dy] of directions) {
          const newX = i + dx;
          const newY = j + dy;

          if (newX >= 0 && newX < N && newY >= 0 && newY < M && map[newX][newY] === 0) {
            melt[i][j]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      map[i][j] = Math.max(0, map[i][j] - melt[i][j]);
    }
  }
}

solution(input);