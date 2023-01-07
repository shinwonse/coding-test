import sys
from collections import deque

input = sys.stdin.readline


def bfs(x, y):
    global wolf, sheep
    visited[x][y] = True
    q = deque()
    q.append([x, y])
    while q:
        x, y = q.popleft()
        if graph[x][y] == 'v':
            wolf += 1
        elif graph[x][y] == 'k':
            sheep += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < r and 0 <= ny < c and graph[nx][ny] != '#' and visited[nx][ny] is False:
                q.append([nx, ny])
                visited[nx][ny] = True


r, c = map(int, input().split())
graph = []
for _ in range(r):
    graph.append(list(input()))
visited = [[False] * c for _ in range(r)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

total_wolf = 0
total_sheep = 0

for i in range(r):
    for j in range(c):
        if graph[i][j] != '#' and visited[i][j] is False:
            wolf = 0
            sheep = 0
            bfs(i, j)
            if wolf >= sheep:
                sheep = 0
            else:
                wolf = 0
            total_wolf += wolf
            total_sheep += sheep

print(total_sheep, total_wolf)
