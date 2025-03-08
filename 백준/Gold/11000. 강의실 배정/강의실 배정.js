const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  peek() {
    return this.heap[0] || null;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function solution(input) {
  const N = Number(input[0]);
  const classes = input.slice(1).map(line => line.split(' ').map(Number));

  // 시작 시간을 기준으로 정렬
  classes.sort((a, b) => a[0] - b[0]);

  // Min Heap (우선순위 큐)
  const pq = new MinHeap();

  for (const [start, end] of classes) {
    if (pq.size() > 0 && pq.peek() <= start) {
      pq.pop(); // 기존 강의실 재사용 가능 (가장 빨리 끝나는 강의 제거)
    }
    pq.push(end); // 새 강의 종료 시간 추가
  }

  console.log(pq.size()); // 최소 강의실 개수 출력
}

solution(input);