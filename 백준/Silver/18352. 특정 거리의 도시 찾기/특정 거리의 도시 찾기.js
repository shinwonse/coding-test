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
  const [n, m, k, x] = input[0].split(' ').map(Number);
  let graph = [];
  for (let i = 1; i <= n; i += 1) graph[i] = [];
  for (let i = 1; i <= m; i += 1) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
  }
  let distance = new Array(n + 1).fill(-1);
  distance[x] = 0;

  const queue = new Queue();
  queue.enqueue(x);
  while (queue.getLength() !== 0) {
    const now = queue.dequeue();
    for (const nextNode of graph[now]) {
      if (distance[nextNode] === -1) {
        distance[nextNode] = distance[now] + 1;
        queue.enqueue(nextNode);
      }
    }
  }
  let check = false;
  for (let i = 1; i <= n; i += 1) {
    if (distance[i] === k) {
      console.log(i);
      check = true;
    }
  }
  if (!check) console.log(-1);
};

solution(input);
