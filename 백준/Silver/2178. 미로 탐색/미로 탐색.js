const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const inputArr = input.slice(1,);
  const graph = inputArr.map(v => v.split('').map(Number));
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  const bfs = (x, y) => {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = new Queue();
    queue.push([x, y]);
    visited[x][y] = 1;

    while (!queue.isEmpty()) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i += 1) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (graph[nx][ny] && !visited[nx][ny]) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);
  return visited[n - 1][m - 1];
}


const answer = solution(input);
console.log(answer);
