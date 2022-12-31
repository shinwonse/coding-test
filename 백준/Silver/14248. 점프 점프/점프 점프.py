from collections import deque

def bfs(node):
    q = deque()
    q.append(node)
    check[node] = 1
    while q:
        node = q.popleft()
        for d in [-graph[node], graph[node]]:
            t = node+d
            if (0 <= t < n) and check[t] == 0:
                q.append(t)
                check[t] = 1

n = int(input())
graph = list(map(int, input().split()))
s = int(input())-1
check = [0]*(n)
bfs(s)
print(check.count(1))