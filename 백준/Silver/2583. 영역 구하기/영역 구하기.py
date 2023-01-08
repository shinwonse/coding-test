import sys
from collections import deque

input = sys.stdin.readline


def bfs(i, j):
    global count
    q = deque()
    q.append([i, j])
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < m and 0 <= ny < n and graph[nx][ny] == 0:
                graph[nx][ny] = 1
                count += 1
                q.append([nx, ny])


m, n, k = map(int, input().split())
graph = [[0] * n for _ in range(m)]
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
result = []

for _ in range(k):
    left_under_x, left_under_y, right_up_x, right_up_y = map(int, input().split())
    for i in range(left_under_y, right_up_y):
        for j in range(left_under_x, right_up_x):
            graph[i][j] = 1

for i in range(m):
    for j in range(n):
        if graph[i][j] == 0:
            count = 1
            graph[i][j] = 1
            bfs(i, j)
            result.append(count)

print(len(result))
result.sort()
for r in result:
    print(r, end=' ')
