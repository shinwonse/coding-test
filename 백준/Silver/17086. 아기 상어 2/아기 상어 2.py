import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())
graph = []

shark = deque()
for i in range(n):
    temp = list(map(int, input().split()))
    for t in range(m):
        if temp[t] == 1:
            shark.append((i, t))
    graph.append(temp)

dx = [-1, -1, -1, 0, 1, 0, 1, 1]
dy = [-1, 0, 1, 1, 1, -1, 0, -1]


def bfs():
    while shark:
        x, y = shark.popleft()
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] == 0:
                    shark.append((nx, ny))
                    graph[nx][ny] = graph[x][y] + 1


bfs()
safe_dist = 0
for i in range(n):
    for j in range(m):
        safe_dist = max(safe_dist, graph[i][j])

print(safe_dist - 1)
