import sys
from collections import deque

input = sys.stdin.readline


def bfs(i, j):
    cnt = 1
    q = deque()
    q.append([i, j])
    visited[i][j] = True
    while q:
        x, y = q.popleft()
        
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            
            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 1 and visited[nx][ny] is False:
                cnt += 1
                visited[nx][ny] = True
                q.append([nx, ny])
    return cnt


n, m = map(int, input().split())
graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))
visited = [[False] * m for _ in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

pictures = 0
max_cnt = 0

for i in range(n):
    for j in range(m):
        if graph[i][j] == 1 and visited[i][j] is False:
            pictures += 1
            max_cnt = max(max_cnt, bfs(i, j))


print(pictures)
print(max_cnt)
