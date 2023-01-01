import sys
from collections import deque

input = sys.stdin.readline

t = int(input())

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]


def bfs(y, x):
    q = deque()
    q.append([y, x])
    graph[y][x] = '.'

    while q:
        y, x = q.popleft()
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if 0 <= ny < h and 0 <= nx < w and graph[ny][nx] == '#':
                q.append([ny, nx])
                graph[ny][nx] = '.'


for _ in range(t):
    result = 0
    h, w = map(int, input().split())
    graph = [list(input()) for _ in range(h)]
    for i in range(h):
        for j in range(w):
            if graph[i][j] == '#':
                bfs(i, j)
                result += 1
    print(result)
