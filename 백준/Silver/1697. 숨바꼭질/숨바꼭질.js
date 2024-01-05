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
  const [n, k] = input[0].split(' ').map(Number);
  const visited = new Array(100001).fill(0);

  const bfs = () => {
    const queue = new Queue();
    queue.enqueue(n);
    while (queue.getLength() !== 0) {
      const cur = queue.dequeue();
      if (cur === k) return visited[cur];
      for (const next of [cur - 1, cur + 1, cur * 2]) {
        if (next < 0 || next > 100000) continue;
        if (visited[next] !== 0) continue;
        visited[next] = visited[cur] + 1;
        queue.enqueue(next);
      }
    }
  }

  return bfs();
};

const answer = solution(input);
console.log(answer);
