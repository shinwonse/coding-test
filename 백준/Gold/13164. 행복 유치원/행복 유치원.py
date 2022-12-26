# 13164 행복 유치원

n, k = map(int, input().split()) # 5 3
height = list(map(int, input().split()))

costs = []

for i in range(n - 1):
    costs.append(height[i + 1] - height[i])

costs.sort()

print(sum(costs[:n - k]))
