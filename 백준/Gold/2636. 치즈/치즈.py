# 백준 2636
# 치즈가 모두 녹아 없어지는 데 걸리는 시간
# 모두 녹기 한 시간 전에 남아있는 치즈조각이 놓여 있는 칸의 개수
from collections import deque

n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
result = []


def bfs():
    q = deque()
    q.append([0, 0])
    visited[0][0] = 1
    cnt = 0

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0:
                if graph[nx][ny] == 0:
                    visited[nx][ny] = 1
                    q.append([nx, ny])
                elif graph[nx][ny] == 1:
                    graph[nx][ny] = 0
                    visited[nx][ny] = 1
                    cnt += 1
    result.append(cnt)
    return cnt


time = 0
while True:
    time += 1
    visited = [[0] * m for _ in range(n)]
    count = bfs()
    if count == 0:
        break

print(time - 1)
print(result[-2])
