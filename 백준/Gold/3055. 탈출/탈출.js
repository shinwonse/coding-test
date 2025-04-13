const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const [R, C] = input[0].split(' ').map(Number);
  const map = input.slice(1).map((line) => line.split(''));
  
  const waterQueue = [];
  const hedgehogQueue = [];

  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] === '*') {
        waterQueue.push([i, j]);
      } else if (map[i][j] === 'S') {
        hedgehogQueue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  while (hedgehogQueue.length > 0) {
    // 물 먼저 퍼뜨리기
    const waterLen = waterQueue.length;
    for (let i = 0; i < waterLen; i++) {
      const [x, y] = waterQueue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];
        if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
          if (map[nx][ny] === '.' || map[nx][ny] === 'S') {
            map[nx][ny] = '*';
            waterQueue.push([nx, ny]);
          }
        }
      }
    }

    const hedgehogLen = hedgehogQueue.length;
    for (let i = 0; i < hedgehogLen; i++) {
      const [x, y, time] = hedgehogQueue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
        if (map[nx][ny] === 'D') {
          console.log(time + 1);
          return;
        }
        if (map[nx][ny] === '.' && !visited[nx][ny]) {
          visited[nx][ny] = true;
          hedgehogQueue.push([nx, ny, time + 1]);
        }
      } 
    }
  }

  console.log('KAKTUS');
}

solution(input);