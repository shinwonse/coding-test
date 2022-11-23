# 2573 빙산
# 동서남북으로 닿아 있는 0의 개수만큼 높이가 줄어든다.
# 동서남북으로 연결되어 있으면 하나의 덩어리
# 빙산이 두 덩어리 이상으로 분리되는 최초의 시간을 리턴
import sys
from collections import deque

input = sys.stdin.readline


def bfs(a, b):
    dx = [-1, 0, 1, 0]
    dy = [0, -1, 0, 1]
    q = deque([[a, b]])
    visited[a][b] = True

    while q:
        x, y = q.popleft()

        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]

            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
                if ice[nx][ny] != 0:
                    visited[nx][ny] = True
                    q.append([nx, ny])
                else:
                    cnt[x][y] += 1

    return 1


n, m = map(int, input().split())
ice = []
for i in range(n):
    ice.append(list(map(int, input().split())))
year = 0

while True:
    answer = []
    visited = [[False] * m for _ in range(n)]
    cnt = [[0] * m for _ in range(n)]

    for i in range(n):
        for j in range(m):
            if ice[i][j] != 0 and not visited[i][j]:
                answer.append(bfs(i, j))

    for i in range(n):
        for j in range(m):
            ice[i][j] -= cnt[i][j]
            if ice[i][j] < 0:
                ice[i][j] = 0

    if len(answer) == 0 or len(answer) >= 2:
        break

    year += 1

print(year) if len(answer) >= 2 else print(0)
