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
  const [n, k, m] = input[0].split(' ').map(Number);
  let graph = [];
  for (let i = 1; i <= n + m; i += 1) graph[i] = [];
  for (let i = 1; i <= m; i += 1) {
    const line = input[i].split(' ').map(Number);
    for (let x of line) {
      graph[x].push(i + n);
      graph[i + n].push(x);
    }
  }

  const visited = new Set([1]);
  const queue = new Queue();
  queue.enqueue([1, 1]);
  let found = false;

  while (queue.getLength() !== 0) {
    const [dist, now] = queue.dequeue();
    if (now === n) {
      console.log(Math.floor(dist / 2) + 1);
      found = true;
      break;
    }
    for (const next of graph[now]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.enqueue([dist + 1, next]);
      }
    }
  }
  if (!found) console.log(-1);
};

solution(input);
