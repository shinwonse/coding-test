import sys
from collections import deque

input = sys.stdin.readline


def bfs(x, y):
    q = deque()
    q.append((x, y))
    visited[x][y] = True
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                if visited[nx][ny] is False and screen[nx][ny] >= t:
                    q.append((nx, ny))
                    visited[nx][ny] = True


result = 0
n, m = map(int, input().split())
screen = [[0] * m for _ in range(n)]
pixels = []
for _ in range(n):
    pixels.append(list(map(int, input().split())))
t = int(input())
visited = [[False] * m for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

for i in range(n):
    for j in range(m):
        total = 0
        for k in range(3):
            total += pixels[i][j * 3 + k]
        avg = total // 3
        screen[i][j] = avg


for i in range(n):
    for j in range(m):
        if screen[i][j] >= t and visited[i][j] is False:
            bfs(i, j)
            result += 1

print(result)
