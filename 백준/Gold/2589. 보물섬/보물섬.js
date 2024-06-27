const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N개의 수 중에서 어떤 수가 다른 두 수의 합으로 나타낼 수 있는지 없는지 판별하는 문제
const solution = (input) => {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const [height, width] = input[0].split(' ').map(Number);
  const map = [];
  for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(''));
  }

  const bfs = (x, y) => {
    const queue = [];
    const visited = Array.from(Array(height), () => Array(width).fill(0));
    let max = 0;

    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i += 1) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (0 <= nx && nx < height && 0 <= ny && ny < width) {
          if (map[nx][ny] === 'L' && visited[nx][ny] === 0) {
            queue.push([nx, ny]);
            visited[nx][ny] = visited[cx][cy] + 1;
            max = Math.max(max, visited[nx][ny]);
          }
        }
      }
    }
    return max - 1;
  }

  let answer = 0;

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      if (map[i][j] === 'L') {
        answer = Math.max(answer, bfs(i, j));
      }
    }
  }

  return answer;
}


const answer = solution(input);
console.log(answer);
