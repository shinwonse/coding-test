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
  const [s, t] = input[0].split(' ').map(Number);
  const queue = new Queue();
  queue.enqueue([s, '']);
  const visited = new Set([s]);
  let found = false;

  if (s === t) {
    return console.log(0);
  }

  while (queue.getLength() !== 0) {
    const [value, opers] = queue.dequeue();
    if (value > 1e9) continue;
    if (value === t) {
      console.log(opers);
      found = true;
      break;
    }
    for (let oper of ['*', '+', '-', '/']) {
      let nextValue = value;
      if (oper === '*') nextValue *= nextValue;
      if (oper === '+') nextValue += nextValue;
      if (oper === '-') nextValue -= nextValue;
      if (oper === '/' && value !== 0) nextValue = 1;
      if (visited.has(nextValue)) continue;
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
  if (!found) console.log(-1);
};

solution(input);
