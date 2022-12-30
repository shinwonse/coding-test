from collections import deque
import sys

input = sys.stdin.readline

n = int(input())
a, b = map(int, input().split())
m = int(input())

graph = [[] for _ in range(n + 1)]
result = [0 for i in range(n + 1)]
for _ in range(m):
    parent, child = map(int, input().split())
    graph[parent].append(child)
    graph[child].append(parent)


def bfs(start):
    q = deque()
    q.append(start)
    visit = [0 for i in range(n + 1)]
    visit[start] = 1
    while q:
        d = q.popleft()
        for i in graph[d]:
            if visit[i] == 0:
                visit[i] = 1
                result[i] = result[d] + 1
                q.append(i)

bfs(a)
print(result[b] if result[b] != 0 else -1)
