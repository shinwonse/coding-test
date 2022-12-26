# 11508 2+1 세일
# 최소비용으로 유제품을 구입할 것

result = 0

n = int(input())
products = []
for _ in range(n):
    products.append(int(input()))

products.sort(reverse=True)

for i in range(n):
    if i % 3 != 2:
        result += products[i]

print(result)
