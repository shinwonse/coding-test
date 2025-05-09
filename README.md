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

### 투포인터 알고리즘
일차원 배열에서 구간에 대한 탐색이 필요한 경우 투포인터 알고리즘을 적용할 수 있을지 고민해볼 수 있다.

```javascript
function solution(gems) {
  let answer = [0, gems.length]; // 가장 긴 길이로 초기화합니다.
  let start = 0; // 첫 번째 포인터
  let end = 0; // 두 번째 포인터

  const gemKinds = new Set(gems).size; // 겹치지 않는 보석의 갯수
  const collect = new Map(); // 보석을 담아둘 변수
  collect.set(gems[0], 1); // 시작하면서 첫 보석을 먼저 담는다

  while (start < gems.length && end < gems.length) { // 두 포인터가 끝에 도달한다면 종료
    if (collect.size === gemKinds) { // 모든 보석을 구매할 수 있다면
      if (end - start < answer[1] - answer[0]) { // 구간을 갱신
        answer = [start + 1, end + 1];
      }

      collect.set(gems[start], collect.get(gems[start]) - 1); // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.

      if (collect.get(gems[start]) === 0) { // 만약 0이 됐다면 목록에서 제거된다.
        collect.delete(gems[start]);
      }
      start += 1; // 첫 번째 포인터 증가
    } else { // 모든 보석을 구매할 수 없다면
      end += 1; // 두 번째 포인터 증가
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)); // 보석을 추가한다.
    }
  }

  return answer; // 결과 반환
}
```
### 백트래킹
- 모든 경우의 수를 탐색하는 알고리즘
- DFS나 BFS를 이용할 수 있다.
- 효율을 위해 탐색하지 않아도 되는 곳을 미리 막는 것을 가지치기라고 한다.
- 자바스크립트는 재귀 효율이 나쁘기 때문에 DFS를 구현할 경우 스택을 이용하는 것이 좋다.
  - 코딩 테스트에선 이를 고려하여 재귀로 작성해도 풀 수 있도록 문제를 제출하는 경우도 있다. 
- 탐색에서 순환이 발생할 수 있다면 BFS를 이용하는 것이 편하다.

**어떻게 작성할 것인가?**
- 우선 모든 경우의 수를 찾을 수 있도록 코딩
- 이후 문제에서 특정한 조건을 만족하는 것만 탐색하고 나머지는 탐색하지 않도록 조건문을 작성한다.
- 즉, 절대로 답이 될 수 없는 것은 탐색을 종료한다.
- 백트래킹은 모든 경우의 수를 찾아야 하기에 일단 하고본다.

```javascript
function check(queen, row) {
  // 이전까지 두었던 퀸의 위치를 확인한다.
  for (let i = 0; i < row; i += 1) {
      // 행의 위치와 대각선의 위치를 체크한다.
      if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
          return false; // 둘 수 없다면 false
      }
  }

  return true; // 모두 통과되면 true
}

function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) { // 체스판 끝에 도달했다면.. 재귀의 탈출 조건
      return 1;
  }

  for (let col = 0; col < n; col += 1) { // 0부터 n까지 열을 돌면 둘 수 있게 만든다.
      queen[row] = col; // 우선 퀸을 둔다
      if (check(queen, row)) { // 퀸을 둘 수 있다면..
          count += search(queen, row + 1); // 다음 행으로 이동!
      }
  }

  return count;
}

function solution(n) {
  // 미리 n개 만큼의 배열을 초기화한다. 0번 행부터 시작한다.
  return search(Array.from({ length: n }, () => 0), 0);
}
```
### 동적계획법
- 해결한 작은 문제로 큰 문제를 해결하는 문제 풀이 방식
- 그리디나 백트래킹처럼 특정 알고리즘이 아닌 문제 해결 방식을 의미한다.
- Dynamic Programming(DP)이라고도 부른다.
  - 동적 계획법이 어렵게 느껴지는 원인 중 하나
  - Dynamic하지 않고 Programming과도 관련이 없다.
- 메모리를 많이 사용하는 대신 빠른 성능을 자랑한다.
- 두 가지 방법론이 있다.
  - 메모이제이션(Memoization)
  - 타뷸레이션(Tabulation)

**메모이제이션**
- 하향식 접근법
- 동적 계획법에서 작은 문제들의 결과는 항상 같다.
- 따라서 이 결과들을 메모리에 저장해 필요할 때 꺼내 쓰는 것이 메모이제이션이다.

**타뷸레이션**
- 상향식 접근법
- 필요한 값들을 미리 계산해두는 것
- 메모이제이션은 필요할 때 계산한다면(Lazy evaluation) 타뷸레이션은 미리 계산해둔다(Eager evalutaion)
- 보통 코딩 테스트에선 메모이제이션을 쓰는 경우가 대부분이다.

**동적 계획법 문제 어떻게 접근할까?**
- 동적 계획법 유형은 키워드만으로 동적 계획법 문제임을 알기 어렵다.
- 그렇기 때문에 문제 유형을 알 수 없다면 다음을 확인해보자.
  - 가장 작은 문제를 정의할 수 있는지?
  - 작은 문제를 통해 큰 문제를 해결할 수 있는 규칙이 있는지?
- 위 두 가지가 가능하다면 동적 계획법 문제다.
- 간혹 메모리를 너무 사용하여 통과 못하는 경우도 있다.
  - 이런 경우엔 백트래킹을 이용할 수 있지만 보통 코딩 테스트에서 자주 나오진 않는다.
