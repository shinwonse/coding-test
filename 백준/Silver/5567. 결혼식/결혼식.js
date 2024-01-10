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

const solution = (input) => {
  const n = Number(input[0]);
  const m = Number(input[1]);
  let graph = [];
  for (let i = 1; i <= n; i += 1) graph[i] = [];
  for (let i = 2; i <= m; i += 1) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let distance = new Array(n + 1).fill(-1);
  distance[1] = 0;

  const queue = new Queue();
  queue.enqueue(1);

  while (queue.getLength() !== 0) {
    const now = queue.dequeue();
    for (const nextNode of graph[now]) {
      if (distance[nextNode] === -1) {
        distance[nextNode] = distance[now] + 1;
        queue.enqueue(nextNode);
      }
    }
  }

  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    if (distance[i] !== -1 && distance[i] <= 2) {
      result += 1;
    }
  }
  console.log(result - 1);
}

solution(input);
