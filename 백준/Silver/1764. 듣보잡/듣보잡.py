# 1764 듣보잡

n, m = map(int, input().split())

a = set()
for i in range(n):
    a.add(input())

b = set()
for i in range(m):
    b.add(input())

result = sorted(list(a & b))

print(len(result))
print('\n'.join(result))
