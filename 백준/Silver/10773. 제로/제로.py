K = int(input())

answer = []

for _ in range(K):
    num = int(input())
    if num != 0:
        answer.append(num)
    else:
        answer.pop()

print(sum(answer))
