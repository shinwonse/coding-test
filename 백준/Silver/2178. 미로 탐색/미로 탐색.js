const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const graph = input.slice(1).map((row) => row.split('').map(Number));

  const answer = bfs(0, 0, graph, N, M);
  console.log(answer);
}

function bfs(x, y, graph, n, m) {
  const queue = [[x, y]];

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
            graph[nx][ny] = graph[cx][cy] + 1;
            queue.push([nx, ny]);
        }
    }
  }

  return graph[n - 1][m - 1];
}

solution(input);