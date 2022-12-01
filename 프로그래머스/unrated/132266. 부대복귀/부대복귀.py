# 복귀가 불가능한 부대원이 있을 수 있음
# sources 원소 순서대로 최단시간 return
from collections import defaultdict, deque

def solution(n, roads, sources, destination):
    graph = defaultdict(set)
    
    for a, b in roads:
        graph[a].add(b)
        graph[b].add(a)
        
    visited = {}
    queue = deque()
    queue.append((destination, 0))
    
    while queue:
        node, distance = queue.popleft()
        if node not in visited:
            visited[node] = distance
            for each in graph[node]:
                queue.append((each, distance + 1))
                
    return [visited.get(each, -1) for each in sources]