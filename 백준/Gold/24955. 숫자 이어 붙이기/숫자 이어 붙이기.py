import sys
from collections import deque
input = sys.stdin.readline
mod = 1_000_000_007
def concat(x, y):
    ans = x
    i = y
    while i > 0:
        ans = (ans * 10) % mod
        i //= 10
    ans += y
    ans %= mod
    return ans

def bfs(a, d, start, end):
    n = len(a)
    ans = [-1]*n
    q = deque()
    q.append(start)
    ans[start] = d[start]
    while q:
        x = q.popleft()
        for y in a[x]:
            if ans[y] != -1:
                continue
            ans[y] = concat(ans[x], d[y])
            q.append(y)
    return ans[end]

n, q = map(int, input().split())
d = list(map(int, input().split()))
a = [[] for _ in range(n)]
for _ in range(n-1):
    u, v = map(int, input().split())
    u -= 1
    v -= 1
    a[u].append(v)
    a[v].append(u)

for _ in range(q):
    u, v = map(int, input().split())
    u -= 1
    v -= 1
    print(bfs(a, d, u, v))
