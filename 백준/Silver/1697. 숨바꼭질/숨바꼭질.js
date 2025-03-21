const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const MAX = 100000;

  const visited = Array(MAX + 1).fill(false);
  const queue = [];
  queue.push([N, 0]);
  visited[N] = true;

  while (queue.length) {
    const [pos, time] = queue.shift();

    if (pos === K) {
      console.log(time);
      return;
    }

    for (const next of [pos - 1, pos + 1, pos * 2]) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

solution(input);