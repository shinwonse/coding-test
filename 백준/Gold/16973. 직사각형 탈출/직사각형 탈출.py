from collections import deque

import sys

input = sys.stdin.readline
n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

h, w, sr, sc, fr, fc = map(int, input().split())
sr, sc, fr, fc = sr - 1, sc - 1, fr - 1, fc - 1
visited = [[0 for i in range(m)] for j in range(n)]

walls = []
for row in range(n):
    for col in range(m):
        if graph[row][col] == 1:
            walls.append((row, col))


def is_satisfied(nrow, ncol):
    if nrow + h - 1 >= n or ncol + w - 1 >= m:
        return False

    for w_row, w_col in walls:
        if nrow <= w_row < nrow + h and ncol <= w_col < ncol + w:
            return False
    return True


dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]


def bfs():
    q = deque()
    q.append((0, sr, sc))

    while q:
        path, row, col = q.popleft()

        if row == fr and col == fc:
            return path

        for i in range(4):
            nrow = row + dx[i]
            ncol = col + dy[i]

            if nrow < 0 or nrow >= n or ncol < 0 or ncol >= m:
                continue

            if not is_satisfied(nrow, ncol):
                continue

            if not visited[nrow][ncol]:
                visited[nrow][ncol] = 1
                q.append((path + 1, nrow, ncol))

    return -1


print(bfs())
