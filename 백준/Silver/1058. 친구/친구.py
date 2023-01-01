import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
friends = [[0 for _ in range(n)] for _ in range(n)]
for i in range(n):
    f = list(input().rstrip())
    for j in range(n):
        if f[j] == 'Y':
            friends[i][j] = 1


def bfs(n, i):
    visited = [0] * n
    visited[i] = 1
    q = deque([(i, 0)])
    count = 0

    while q:
        j, cnt = q.popleft()
        if cnt >= 2:
            continue

        for k in range(n):
            if not visited[k] and friends[j][k]:
                count += 1
                visited[k] = 1
                q.append((k, cnt + 1))

    return count


result = 0
for i in range(n):
    result = max(result, bfs(n, i))
print(result)
