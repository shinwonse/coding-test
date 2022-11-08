import sys

input = sys.stdin.readline
n, k = map(int, input().split())
circle = [x for x in range(1, n + 1)]
removed = []
now = k - 1
while circle:
    removed.append(circle.pop(now))
    if circle:
        now = ((now - 1) + k) % len(circle)
print(f'<{", ".join(map(str,removed))}>')
