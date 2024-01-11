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
  const [n, m] = input[0].split(' ').map(Number);
  const graph = [];
  for (let i = 1; i <= n; i += 1) {
    graph.push(input[i].split(' ').map(Number));
  }
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const bfs = () => {
    let visited = [];
    for (let i = 0; i < n; i += 1) {
      visited.push(new Array(m).fill(false));
    }
    visited[0][0] = true;
    const queue = new Queue();
    queue.enqueue([0, 0]);
    while (queue.getLength() !== 0) {
      const [x, y] = queue.dequeue();
      for (let i = 0; i < 4; i += 1) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (!visited[nx][ny]) {
          if (graph[nx][ny] >= 1) graph[nx][ny] += 1;
          else {
            visited[nx][ny] = true;
            queue.enqueue([nx, ny]);
          }
        }
      }
    }
  }

  const melt = () => {
    let finish = true;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0 ; j < m; j += 1) {
        if (graph[i][j] >= 3) {
          graph[i][j] = 0;
          finish = false;
        }
        else if (graph[i][j] === 2) graph[i][j] = 1;
      }
    }
    return finish;
  }

  let result = 0;
  while (true) {
    bfs();
    if (melt()) break;
    else result += 1;
  }
  return result;
}

const answer = solution(input);
console.log(answer);
