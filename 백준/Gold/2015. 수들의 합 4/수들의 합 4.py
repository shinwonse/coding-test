# 2015 수들의 합 4

result = 0

n, k = map(int, input().split())
arr = list(map(int, input().split()))

sum_value = 0
prefix_sum = [0]
dic = {0: 1}

for i in arr:
    sum_value += i
    prefix_sum.append(sum_value)

    if sum_value - k in dic:
        result += dic[sum_value - k]
    if sum_value in dic:
        dic[sum_value] += 1
    else:
        dic[sum_value] = 1

print(result)
