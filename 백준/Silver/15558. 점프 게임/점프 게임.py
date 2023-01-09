import sys
from collections import deque

input = sys.stdin.readline


def visitable(x, y, idx):
    return idx < y < n and graph[x][y] and not visited[x][y]


def bfs(start):
    q = deque([start])
    cur_idx = 0
    while q:
        for _ in range(len(q)):
            x, y = q.popleft()
            for next_x, next_y in ((x, y + 1), (x, y - 1), (~x, y + k)):
                if next_y >= n:
                    return 1
                if visitable(next_x, next_y, cur_idx):
                    q.append((next_x, next_y))
                    visited[next_x][next_y] = True
        cur_idx += 1
    return 0


n, k = map(int, input().split())
graph = [list(map(int, input().rstrip())) for _ in range(2)]
visited = [[False] * n for _ in range(2)]
print(bfs([0, 0]))
