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
  const answer = [];

  const tree = Array.from({ length: n + 1 }, () => Array());
  for (let i = 0; i < n - 1; i += 1) {
    const [a, b] = input[i + 1].split(' ').map(Number)
    tree[a].push(b);
    tree[b].push(a);
  }

  let visited = Array.from({ length: n + 1 }, () => 0);
  visited[1] = 1;

  const bfs = () => {
    const queue = new Queue();
    for (const next of tree[1]) {
      visited[next] = 1;
      queue.enqueue(next);
    }
    while (queue.getLength() !== 0) {
      const node = queue.dequeue();
      for (const next of tree[node]) {
        if (visited[next] === 0) {
          visited[next] = node;
          queue.enqueue(next);
        }
      }
    }
  }
  bfs();

  for (let i = 2; i <= n; i += 1) {
    answer.push(visited[i]);
  }
  return answer.join('\n');
}

const answer = solution(input);
console.log(answer);
