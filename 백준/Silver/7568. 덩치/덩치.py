N = int(input())
profile = []
answer = []

for _ in range(N):
    profile.append(list(map(int, input().split())))

for index, p in enumerate(profile):
    weight = p[0]
    height = p[1]
    cnt = 0
    for i in range(N):
        cur_weight = profile[i][0]
        cur_height = profile[i][1]

        if weight < cur_weight and height < cur_height:
            cnt += 1

    answer.append(cnt + 1)

print(*answer)
