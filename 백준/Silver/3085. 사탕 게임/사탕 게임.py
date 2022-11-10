n = int(input())
candy = [list(input()) for _ in range(n)]
answer = 0


def get_max_candy():
    global answer
    for i in range(n):
        cnt = 1
        for j in range(1, n):
            if candy[i][j] == candy[i][j - 1]:
                cnt += 1
                answer = max(answer, cnt)
            else:
                cnt = 1

        cnt = 1
        for j in range(1, n):
            if candy[j][i] == candy[j - 1][i]:
                cnt += 1
                answer = max(answer, cnt)
            else:
                cnt = 1


for i in range(n):
    for j in range(n):
        if j + 1 < n:
            candy[i][j], candy[i][j + 1] = candy[i][j + 1], candy[i][j]
            get_max_candy()
            candy[i][j], candy[i][j + 1] = candy[i][j + 1], candy[i][j]
        if i + 1 < n:
            candy[i][j], candy[i + 1][j] = candy[i + 1][j], candy[i][j]
            get_max_candy()
            candy[i][j], candy[i + 1][j] = candy[i + 1][j], candy[i][j]

print(answer)
