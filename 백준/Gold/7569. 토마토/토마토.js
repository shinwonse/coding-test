const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

/**
 * 며칠이 지나야 토마토가 모두 익을까?
 */
function solution(input) {
  const [M, N, H] = input[0].split(' ').map(Number);
  const box = [];
  const queue = [];
  let unripeCount = 0;
  let days = -1;

  let index = 1;
  for (let h = 0; h < H; h++) {
    const floor = [];
    for (let n = 0; n < N; n++) {
      const row = input[index++].split(' ').map(Number);
      for (let m = 0; m < M; m++) {
        if (row[m] === 1) {
          queue.push([h, n, m]);
        } else if (row[m] === 0) {
          unripeCount++;
        }
      }
      floor.push(row);
    }
    box.push(floor);
  }

  // 3차원 방향 벡터 (위, 아래, 앞, 뒤, 왼쪽, 오른쪽)
  const dz = [0, 0, 0, 0, 1, -1];
  const dy = [-1, 1, 0, 0, 0, 0];
  const dx = [0, 0, -1, 1, 0, 0];

  let front = 0;
  while (front < queue.length) {
    days++;
    const size = queue.length;
    
    for (let i = front; i < size; i++) {
      const [z, y, x] = queue[front++];
      
      for (let d = 0; d < 6; d++) {
        const nz = z + dz[d];
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (nz >= 0 && nz < H && ny >= 0 && ny < N && nx >= 0 && nx < M && box[nz][ny][nx] === 0) {
          box[nz][ny][nx] = 1;
          queue.push([nz, ny, nx]);
          unripeCount--;
        }
      }
    }
  }

  console.log(unripeCount === 0 ? days : -1);
}

solution(input);