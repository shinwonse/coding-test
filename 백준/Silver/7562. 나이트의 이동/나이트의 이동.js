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
  const t = Number(input[0]);
  let line = 1;
  const answer = [];
  for (let i = 0; i < t; i += 1) {
    const l = Number(input[line++]);
    const [sx, sy] = input[line++].split(' ').map(Number);
    const [ex, ey] = input[line++].split(' ').map(Number);
    const visited = Array.from(Array(l), () => Array(l).fill(false));
    const queue = new Queue();
    queue.enqueue([sx, sy]);
    visited[sx][sy] = true;
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];
    let flag = false;
    let count = 0;
    while (queue.getLength()) {
      const len = queue.getLength();
      for (let i = 0; i < len; i += 1) {
        const [x, y] = queue.dequeue();
        if (x === ex && y === ey) {
          flag = true;
          break;
        }
        for (let j = 0; j < 8; j += 1) {
          const nx = x + dx[j];
          const ny = y + dy[j];
          if (nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
          if (visited[nx][ny]) continue;
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
      if (flag) break;
      count++;
    }
    answer.push(count);
  }
  return answer.join('\n');
};

const answer = solution(input);
console.log(answer);
