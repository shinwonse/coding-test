import sys
from collections import deque

input = sys.stdin.readline


def bfs():
    while q:
        x = q.popleft()
        for i in range(8):
            if i < 6:
                nx = x + d[i]
                if 0 <= nx <= 100000 and visited[nx] is False:
                    q.append(nx)
                    visited[nx] = True
                    graph[nx] = graph[x] + 1
            else:
                nx = x * d[i]
                if 0 <= nx <= 100000 and visited[nx] is False:
                    q.append(nx)
                    visited[nx] = 1
                    graph[nx] = graph[x] + 1


a, b, n, m = map(int, input().split())
graph = [0 for i in range(100001)]
visited = [False for _ in range(100001)]
visited[n] = True
d = [1, -1, a, -a, b, -b, a, b]

q = deque()
q.append(n)
bfs()
print(graph[m])
