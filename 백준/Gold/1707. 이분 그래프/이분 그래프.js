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

const bfs = (x, graph, visited) => {
  const queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;
  while (queue.getLength() !== 0) {
    const now = queue.dequeue();
    for (const next of graph[now]) {
      if (visited[next] === -1) {
        visited[next] = (visited[now] + 1) % 2;
        queue.enqueue(next);
      }
    }
  }
}

const isBipartite = (graph, visited) => {
  for (let i = 1; i < visited.length; i += 1) {
    for (const next of graph[i]) {
      if (visited[i] === visited[next]) return false;
    }
  }
  return true;
}

const solution = (input) => {
  const k = Number(input[0]);
  let line = 1;
  for (let i = 0; i < k; i += 1) {
    const [v, e] = input[line].split(' ').map(Number);
    const graph = Array.from(Array(v + 1), () => Array());
    const visited = Array(v + 1).fill(-1);
    for (let j = 1; j <= e; j += 1) {
      const [a, b] = input[line + j].split(' ').map(Number);
      graph[a].push(b);
      graph[b].push(a);
    }
    for (let j = 1; j <= v; j += 1) {
      if (visited[j] === -1) {
        bfs(j, graph, visited);
      }
    }
    line += e + 1;
    if (isBipartite(graph, visited)) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
};

solution(input);
