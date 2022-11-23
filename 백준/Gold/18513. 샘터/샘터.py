# 18513
# N개의 샘터, K채의 집
# 불행도 -> 집에서 가장 가까운 샘터까지의 거리
# 불행도가 최소가 되도록 집을 짓자
import sys
from collections import deque

input = sys.stdin.readline

n, k = map(int, input().split())
water = list(map(int, input().split()))
visited = dict()

q = deque()
for w in water:
    q.append(w)
    visited[w] = 0

while q:
    if k <= 0:
        break
    x = q.popleft()
    for i in [x - 1, x + 1]:
        if i not in visited and k > 0:
            visited[i] = visited[x] + 1
            k -= 1
            q.append(i)

result = 0
for k, v in visited.items():
    result += v
    
print(result)
