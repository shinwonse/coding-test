import sys

input = sys.stdin.readline


def dfs(count):
    global sale_group

    if count == sale_group_num:
        return check()

    for k in range(count, sale_group_num):
        sale_group[count], sale_group[k] = sale_group[k], sale_group[count]
        dfs(count + 1)
        sale_group[count], sale_group[k] = sale_group[k], sale_group[count]


def check():
    global min_cost
    costs = potions[::]
    now_cost = 0

    count = 0
    while count < sale_group_num:
        buy = sale_group[count]
        now_cost += costs[buy]
        for portion_num, sale in sale_info[buy]:
            costs[portion_num] = costs[portion_num] - sale if costs[portion_num] - sale > 0 else 1
        count += 1

    for portion_num in non_sale_group:
        now_cost += costs[portion_num]

    min_cost = min(min_cost, now_cost)


n = int(input())
potions = [0] + list(map(int, input().split()))
sale_info = [[] for _ in range(n + 1)]

non_sale_group = []
sale_group = []
sale_group_num = 0

for i in range(1, n + 1):
    num = int(input())
    if not num:
        non_sale_group.append(i)
        continue
    sale_group_num += 1
    sale_group.append(i)
    for _ in range(num):
        portion, sale = map(int, input().split())
        sale_info[i].append((portion, sale))

min_cost = int(1e9)
dfs(0)
print(min_cost)
