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
  const [a, b] = input[0].split(' ').map(Number);
  const queue = new Queue();
  queue.enqueue([a, 0]);
  const visited = new Set();
  let found = false;

  while (queue.getLength() !== 0) {
    const [n, count] = queue.dequeue();
    if (n === b) {
      found = true;
      return count + 1;
    }
    if (visited.has(n)) continue;
    visited.add(n);
    if (n * 2 <= b) queue.enqueue([n * 2, count + 1]);
    if (n * 10 + 1 <= b) queue.enqueue([n * 10 + 1, count + 1]);
  }
  if (!found) {
    return -1;
  }
}

const answer = solution(input);
console.log(answer);
