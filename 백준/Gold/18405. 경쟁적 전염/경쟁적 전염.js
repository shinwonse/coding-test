const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (graph, start, visited) => {
  const queue = new Queue();
  const [x, y] = start;
  queue.enqueue(start);
  visited[x][y] = true;
  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < graph.length &&
        ny >= 0 &&
        ny < graph.length &&
        !visited[nx][ny] &&
        graph[nx][ny] === 0
      ) {
        graph[nx][ny] = graph[x][y];
        queue.enqueue([nx, ny]);
      }
    }
  }
}

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const graph = [];
  const virus = [];
  for (let i = 0; i < n; i += 1) {
    graph.push(input[i + 1].split(' ').map(Number));
    for (let j = 0; j < n; j += 1) {
      if (graph[i][j] !== 0) virus.push([graph[i][j], 0, i, j]);
    }
  }
  virus.sort((a, b) => a[0] - b[0]);
  const queue = new Queue();
  for (const x of virus) queue.enqueue(x);
  const [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.getLength() !== 0) {
    const [v, s, x, y] = queue.dequeue();
    if (s === targetS) break;
    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (graph[nx][ny] === 0) {
          graph[nx][ny] = v;
          queue.enqueue([v, s + 1, nx, ny]);
        }
      }
    }
  }
  return graph[targetX - 1][targetY - 1];
};

const answer = solution(input);
console.log(answer);
