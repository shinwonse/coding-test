import sys
from collections import defaultdict, deque

input = sys.stdin.readline


def bfs(start):
    cnt = 0
    visited[start] = 1
    q = deque([[start, 0]])
    while q:
        u, dist = q.popleft()
        if dist <= 2:
            cnt += 1
        for v in friendship[u]:
            if not visited[v]:
                visited[v] = 1
                q.append([v, dist + 1])

    return cnt - 1


n = int(input())
m = int(input())
friendship = defaultdict(list)
visited = [0] * (n + 1)
for _ in range(m):
    a, b = map(int, input().split())
    friendship[a].append(b)
    friendship[b].append(a)

print(bfs(1))
