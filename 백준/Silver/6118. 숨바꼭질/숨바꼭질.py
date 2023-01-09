import sys
from collections import deque

input = sys.stdin.readline


def bfs(node):
    q = deque()
    q.append(node)
    d[node] = 1
    while q:
        node = q.popleft()
        for gn in graph[node]:
            if d[gn] == 0:
                d[gn] = d[node] + 1
                q.append(gn)


n, m = map(int, input().split())
graph = [[] for _ in range(n + 1)]
d = [0 for _ in range(n + 1)]
for _ in range(m):
    a_i, b_i = map(int, input().split())
    graph[a_i].append(b_i)
    graph[b_i].append(a_i)
bfs(1)
m = max(d)
print(d.index(m), m - 1, d.count(m))
