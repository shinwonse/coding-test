# 코딩테스트 대비 알고리즘 문제풀이 연습

## 필수 알고리즘 정리

### 해시 테이블
javascript에서는 객체를 해시 테이블로 사용할 수 있다.
```javascript
const hashTable = {};
hashTable['key'] = 'value';
```
Map 객체를 사용할 수도 있다.
```javascript
const map = new Map();
map.set('key', 'value');
```
Set 객체를 사용할 수도 있다.
```javascript
const set = new Set();
set.add('value');
```

### 스택과 큐
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  
  peek() {
    return this.head.value;
  }
}
```
### 우선순위 큐
FIFO인 큐와 달리 우선 순위가 높은 요소가 먼저 나가는 큐

우선순위 큐는 자료구조가 아닌 개념

**힙**

이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될 때 바로 정렬되는 특징이 있다.
- 우선순위가 높은 요소가 먼저 나가는 특징을 가진다.
- 루트가 가장 큰 값이 되는 최대 힙(Max Heap)과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다.
- 자바스크립트에선 직접 구현해서 사용해야 한다.

**힙 요수 추가 알고리즘**
- 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다.
- 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
- 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
- 완전 이진 트리의 높이는 logN이기에 힙의 요소 추가 알고리즘은 O(logN) 시간복잡도를 가진다.

**힙 요소 제거 알고리즘**
- 요소 제거는 루트 정점만 가능하다.
- 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
- 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다.
- 두 자식 정점이 우선순위가 더 낮을 때까지 반복한다.
- 완전 이진 트리의 높이는 logN이기에 힙의 요소 제거 알고리즘은 O(logN) 시간복잡도를 가진다.

```javascript
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex  = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (this.heap[currentIndex] < this.heap[leftIndex] ||
    this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
```

### Queue
```javascript
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  
  isEmpty() {
    return this.rear === this.front;
  }
  
  size() {
    return this.rear - this.front;
  }
}
```

### BFS와 DFS
**BFS, DFS**는 그래프의 간선 가중치가 모두 같을 때 적합하다.
```javascript
function bfs(graph, start) {
  const visited = [];
  const queue = new Queue();
  
  queue.enqueue(start);
  visited[start] = true;
  
  while (queue.length !== 0) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (!visited[dest]) {
        queue.enqueue(dest);
        visited[dest] = true;
      }
    }
  }
}
```
### 다익스트라 (Dijkstra)
그래프의 간선 가중치가 각각 다른 경우 적합하다.
- 우선순위 큐를 이용하여 만들 수 있다.
- 시간 복잡도는 V가 정점의 수, E가 간선의 수일때 O(ElogV)이다.

**문제 접근법**
1. 시작점을 제외한 모든 정점의 거리를 무한으로 설정한다. 시작점은 0으로 설정한다.
2. 시작점을 선택한다.
3. 선택한 정점에서 갈 수 있는 정점의 거리를 정점(해당 정점까지의 최단 거리)값 + 간선(거리)값으로 갱신한다.
4. 선택한 정점을 방문 처리한다.
5. 이미 방문한 정점과 무한인 정점을 제외하고 가장 최단 거리인 정점을 선택한다.
6. 더 이상 방문할 수 있는 정점이 없을 때까지 3~5번을 반복한다.
7. 도착점의 값을 확인한다.

```javascript
function dijkstra(graph, start) {
  const dist = [];
  const visited = [];
  const queue = new PriorityQueue();
  
  for (let i = 0; i < graph.length; i++) {
    dist[i] = Infinity;
  }
  
  dist[start] = 0;
  queue.enqueue([start, 0]);
  
  while (queue.length !== 0) {
    const [src, srcDist] = queue.dequeue();
    if (visited[src]) continue;
    visited[src] = true;
    
    for (const [dest, destDist] of graph[src]) {
      if (dist[dest] > srcDist + destDist) {
        dist[dest] = srcDist + destDist;
        queue.enqueue([dest, dist[dest]]);
      }
    }
  }
}
```
