# 코딩테스트 대비 알고리즘 문제풀이 연습

## 필수 알고리즘 정리

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
