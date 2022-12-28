import sys
from collections import deque

input = sys.stdin.readline


def bfs(start):
    q = deque([start])
    visited[start] = True
    while q:
        node = q.popleft()
        for i in graph[node]:
            if not visited[i]:
                visited[i] = True
                q.append(i)
                

n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * (n + 1)
count = 0

for i in range(1, n + 1):
    if not visited[i]:
        if not graph[i]:
            count += 1
            visited[i] = True
        else:
            bfs(i)
            count += 1

print(count)
