# 20365 블로그2

n = int(input())
colors = list(input())
colors.append('A')

cnt = [1] * 2

for i in range(n):
    if colors[i] == 'B':
        continue
    elif colors[i] == 'R':
        cnt[0] += 1
        if colors[i + 1] == 'R':
            cnt[0] -= 1
            continue

for i in range(n):
    if colors[i] == 'R':
        continue
    elif colors[i] == 'B':
        cnt[1] += 1
        if colors[i + 1] == 'B':
            cnt[1] -= 1
            continue

print(min(cnt))
