import sys

input = sys.stdin.readline

r, c = map(int, input().split())
graph = []
for _ in range(r):
    graph.append(list(input()))

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

flag = True
for i in range(r):
    for j in range(c):
        if graph[i][j] == 'W':
            for k in range(4):
                nx = i + dx[k]
                ny = j + dy[k]

                if nx <= -1 or nx >=r or ny <= -1 or ny >= c:
                    continue

                if graph[nx][ny] == 'S':
                    flag = False
                    break

if flag is False:
    print(0)
else:
    print(1)
    for i in range(r):
        for j in range(c):
            if graph[i][j] == '.':
                graph[i][j] = 'D'
    for k in graph:
        print(''.join(k))
