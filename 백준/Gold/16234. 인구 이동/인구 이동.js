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
  const [n, l, r] = input[0].split(' ').map(Number);
  let graph = [];
  for (let i = 1; i <= n; i += 1) {
    graph.push(input[i].split(' ').map(Number));
  }
  let total = 0;

  const bfs = (x, y, index, union) => {
    const united = [[x, y]];
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    const q = new Queue();
    q.enqueue([x, y]);
    union[x][y] = index;
    let sum = graph[x][y];
    let count = 1;
    while (q.getLength() !== 0) {
      const [x, y] = q.dequeue();
      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] === -1) {
          const diff = Math.abs(graph[x][y] - graph[nx][ny]);
          if (l <= diff && diff <= r) {
            q.enqueue([nx, ny]);
            union[nx][ny] = index;
            sum += graph[nx][ny];
            count += 1;
            united.push([nx, ny]);
          }
        }
      }
    }
    for (const unit of united) {
      const [i, j] = unit;
      graph[i][j] = Math.floor(sum / count);
    }
  }

  while (true) {
    const union = Array.from(Array(n), () => Array(n).fill(-1));
    let index = 0;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (union[i][j] === -1) {
          bfs(i, j, index, union);
          index += 1;
        }
      }
    }
    if (index === n * n) break;
    total += 1;
  }

  return total;
}

const answer = solution(input);
console.log(answer);
