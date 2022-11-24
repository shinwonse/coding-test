# 14916 거스름돈

# 동전의 개수가 최소가 되도록 돌려주기

n = int(input())

count = 0
while n != 0:
    if n % 5 == 0:
        count += n // 5
        break
    else:
        n -= 2
        count += 1
    if n < 0:
        break

if n < 0:
    print(-1)
else:
    print(count)