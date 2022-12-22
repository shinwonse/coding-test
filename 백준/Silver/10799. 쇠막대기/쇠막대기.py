# 10799 쇠막대기

graph = list(input())
result = 0
stack = []

for i in range(len(graph)):
    if graph[i] == '(':
        stack.append('(')
        continue

    if graph[i - 1] == '(':
        stack.pop()
        result += len(stack)
    else:
        stack.pop()
        result += 1

print(result)
