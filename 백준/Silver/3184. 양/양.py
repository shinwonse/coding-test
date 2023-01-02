import sys
from collections import deque

input = sys.stdin.readline


def bfs(x, y):
    global sheep, wolf
    q = deque()
    q.append((x, y))
    to, tv = 0, 0
    if graph[x][y] == 'o':
        to += 1
    elif graph[x][y] == 'v':
        tv += 1
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < r and 0 <= ny < c and visited[nx][ny] is False and graph[nx][ny] != '#':
                if graph[nx][ny] == 'o':
                    to += 1
                if graph[nx][ny] == 'v':
                    tv += 1
                visited[nx][ny] = True
                q.append((nx, ny))

    if to and tv:
        if to > tv:
            wolf -= tv
        else:
            sheep -= to


r, c = map(int, input().split())
graph = []
visited = [[False] * c for _ in range(r)]
sheep, wolf = 0, 0
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
for _ in range(r):
    temp = list(input().strip())
    for i in range(c):
        if temp[i] == 'o':
            sheep += 1
        if temp[i] == 'v':
            wolf += 1
    graph.append(temp)

for i in range(r):
    for j in range(c):
        if graph[i][j] == 'o' or graph[i][j] == 'v' and visited[i][j] == False:
            visited[i][j] = True
            bfs(i, j)

print(sheep, wolf)
